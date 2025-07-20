import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { BASE_URL, validExperienceTypes } from '../utils/constants'
import { useRef, useState } from 'react'
import Loader from './Loader'
import { Spinner } from '@material-tailwind/react'
import axios from 'axios'
import { showToast } from '../utils/store/slices/appSlice'
import { useDispatch } from 'react-redux'


export default function Example() {

    const [isLoading, setIsLoading] = useState(false)

    const titleRef = useRef(null)
    const companyRef = useRef(null)
    const descriptionRef = useRef(null)
    const experienceTypeRef = useRef(null)
    const isAnonymousRef = useRef(null)

    const dispatch = useDispatch()

    const handlePostExperience = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const title = titleRef.current.value;
            const description = descriptionRef.current.value
            const companyName = companyRef.current.value
            const type = experienceTypeRef.current.value
            const isAnonymous = isAnonymousRef.current.checked

            const data = await axios.post(BASE_URL + "/api/v1/experience/new", {
                title, description, companyName, type, isAnonymous
            }, {withCredentials: true})

            const successMessage = data.data.message
            console.log(successMessage)

            dispatch(showToast({
                type: "success",
                message: successMessage
            }))

        }
        catch (err) {
            console.log(err)
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" >
                <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }} className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75" />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Share your experience</h2>
                <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
            </div>
            <form action="#" onSubmit={handlePostExperience} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                            Title
                        </label>
                        <div className="mt-2.5">
                            <input required ref={titleRef} id="title" name="title" type="text" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                            Company name
                        </label>
                        <div className="mt-2.5">
                            <input required ref={companyRef} id="company" name="company" type="text" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                            Experience Type
                        </label>
                        <div className="mt-2.5">
                            <select ref={experienceTypeRef} id="type" name="type" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" >
                                {
                                    validExperienceTypes.map(type => <option value={type} key={type}>{type}</option>)
                                }
                            </select>
                        </div>
                    </div>


                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                            Description
                        </label>
                        <div className="mt-2.5">
                            <textarea ref={descriptionRef} id="message" name="message" rows={4} className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" defaultValue={''}
                            />
                        </div>
                    </div>
                    <div className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2"> <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                                <input ref={isAnonymousRef} id="isAnonymous" name="isAnonymous" type="checkbox" aria-label="isAnonymous" className="absolute inset-0 appearance-none focus:outline-hidden" />
                            </div>
                        </div>
                        <label htmlFor="isAnonymous" className="text-sm/6 text-gray-600">
                            By selecting this, your experience will be shared{' '}
                            <a href="#" className="font-semibold whitespace-nowrap text-indigo-600"> Anonymously
                            </a>
                            .
                        </label>
                    </div>
                </div>
                <div className="mt-10">
                    <button type="submit" className="block text-center w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                        {
                            isLoading ? <Spinner /> : "Share"
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}
