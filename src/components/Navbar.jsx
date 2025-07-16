import { Dialog, DialogPanel, MenuButton, MenuItem, Menu, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { BASE_URL, navigation, userNavigation } from '../utils/constants'
import { addUser } from '../utils/store/slices/userSlice'
import { setActiveTab } from '../utils/store/slices/appSlice'
import { handleLogout } from '../services/authService'
import Toast from './Toast'

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const user = useSelector(store => store.user.user)
    const app = useSelector(store => store.app)

    const toast = useSelector(store => store.app.toast)

    const location = useLocation()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getProfile = async () => {

        const currentPath = location.pathname

        try {

            const res = await axios.get(BASE_URL + "/api/v1/user/profile", {
                withCredentials: true
            })


            const user = res.data.user
            dispatch(addUser(user))
            // navigate("/home")

        }
        catch (err) {
        }
    }

    useEffect(() => {
        if (user == null) {
            getProfile()
        }
    }, [])


    return (
        <header className="absolute inset-x-0 top-0 z-50 -px-2 lg:max-w-7xl lg:px-8">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/home" className="-m-1.5 sm:ml-8 p-1.5">
                        <span className="sr-only">VoizOut</span>
                        {/* <img
                alt=""
                src="/voizoutLogo.png"
                className="h-8 w-auto mix-blend-multiply"
              /> */}
                        <h2 className='text-2xl font-bold '>VoizOut</h2>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link to={item.href} key={item.name} onClick={() => dispatch(setActiveTab(item.name))} className={`text-sm/6 font-semibold ${app?.activeTab == item?.name ? "text-indigo-500" : "text-gray-900"} hover:text-indigo-500`}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                {
                    !user ?
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <Link to="/login" className="text-sm/6 font-semibold text-gray-900">Log in<span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div> :
                        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                            <Menu as="div" className="relative ">
                                <div>
                                    <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-500 text-sm focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800 focus:outline-hidden">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img alt="" src={user.photoUrl || "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"} className="size-8 rounded-full" />
                                    </MenuButton>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    {userNavigation.map((item) => (
                                        <MenuItem key={item.name}>
                                            <Link
                                                to={item.href}
                                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                            >
                                                {item.name}
                                            </Link>
                                        </MenuItem>
                                    ))}
                                    <MenuItem>
                                        <button onClick={() => handleLogout(dispatch, navigate)} className='w-full text-start px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden'>Log out</button>
                                    </MenuItem>

                                </MenuItems>
                            </Menu>
                        </div>
                }
            </nav>
            {
                toast != null ?
                    <div className='mx-4'>
                        <Toast data={toast} />
                    </div> :
                    ""
            }
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/home" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <h2 className='text-2xl  font-bold'>VoizOut</h2>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        onClick=
                                        {
                                            () => {
                                                setMobileMenuOpen(false)
                                                dispatch(setActiveTab(item.name))
                                            }
                                        }
                                        key={item.name}
                                        to={item.href}
                                        className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${item.name == user?.activeTab ? "text-indigo-500" : "text-gray-900"} hover:bg-gray-50`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            {!user ?
                                <div className="py-1">
                                    <Link
                                        onClick={() => setMobileMenuOpen(false)}
                                        to="/login"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </Link>
                                </div>
                                :
                                <div className="space-y-2 py-6">
                                    {userNavigation.map((item) => (
                                        <Link
                                            onClick={() => setMobileMenuOpen(false)}
                                            key={item.name}
                                            to={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Link to={"/home"} onClick={() => handleLogout(dispatch, navigate)} className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50`} >
                                        Log out
                                    </Link>
                                </div>

                            }
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>

        </header>
    )
}

export default Navbar