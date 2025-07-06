
import { useEffect, useState } from 'react'
import { Field, Label, Switch } from '@headlessui/react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import ProfileImage from './ProfileImage'
import Loader from './Loader'
import editProfileData from '../services/editProfile'

export default function UpdateProfile() {
    const user = useSelector(store => store.user.user, shallowEqual)

    const dispatch = useDispatch()

    const [showEmail, setShowEmail] = useState(false)

    const [formData, setFormData] = useState({
        name: user?.name || "",
        bio: user?.bio || "",
        photoUrl: user?.photoUrl || "",
        contact: user?.contact || ""
    })

    useEffect(() => {
        console.log(user)
        if (user) {
            setFormData({
                name: user.name || "",
                bio: user.bio || "",
                photoUrl: user.photoUrl || "",
                contact: user.contact || ""
            })
        }
    }, [user])

    useEffect(() => {
        console.log("Re-Rendered: showEmail =", showEmail)
    }, [showEmail])

    const { name, bio, contact, photoUrl } = formData

    const handleChange = (field) => (e) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }))
    }

    const handleEditClick = async () => {
        editProfileData(dispatch, name, contact, photoUrl, bio, showEmail)
    }

    if (!user) {
        return <Loader />
    }

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75" />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Edit Profile</h2>
                <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
            </div>
            <form className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className='sm:col-span-2 w-full'>
                        <ProfileImage />
                    </div>

                    <div className='sm:col-span-2'>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-900">Your name</label>
                        <div className="mt-2.5">
                            <input id="name" name="name" type="text" value={name} onChange={handleChange('name')} autoComplete="name" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600" />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
                            Current Company <span className='text-gray-400'>(optional)</span>
                        </label>
                        <div className="mt-2.5">
                            <input id="company" name="company" type="text" autoComplete="organization" placeholder="eg. TCS" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600" />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="contact" className="block text-sm font-semibold text-gray-900">
                            Phone number <span className='text-gray-400'>(optional)</span>
                        </label>
                        <div className="mt-2.5">
                            <input id="contact" name="contact" type="text" value={contact} onChange={handleChange('contact')} placeholder="123-456-7890" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="photoUrl" className="block text-sm font-semibold text-gray-900">
                            Photo link <span className='text-gray-400'>(optional)</span>
                        </label>
                        <div className="mt-2.5">
                            <input id="photoUrl" name="photoUrl" type="url" value={photoUrl} onChange={handleChange('photoUrl')} placeholder="https://example.com/photo.png" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="bio" className="block text-sm font-semibold text-gray-900">
                            Bio
                        </label>
                        <div className="mt-2.5">
                            <textarea id="bio" name="bio" rows={5} value={bio} onChange={handleChange('bio')} maxLength={250} className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>

                    <Field className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch checked={showEmail} onChange={setShowEmail} className="group flex w-8 cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out data-[checked]:bg-indigo-600" > <span className="sr-only">Show email publicly</span> <span aria-hidden="true" className="size-4 transform rounded-full bg-white shadow ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5" />
                            </Switch>
                        </div>
                        <Label className="text-sm text-gray-600">
                            Make my email visible to everyone
                            <a href="#" className="ml-1 font-semibold text-indigo-600">privacy policy</a>.
                        </Label>
                    </Field>
                </div>

                <div className="mt-10">
                    <button type="button" onClick={handleEditClick} className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600">
                        Update
                    </button>
                </div>
            </form>
        </div>
    )
}
