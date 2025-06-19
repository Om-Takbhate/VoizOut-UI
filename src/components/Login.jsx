import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SelectRole from "./SelectRole"
import Navbar from './Navbar';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/store/slices/userSlice';

const SignIn = () => {

    const [isLogin, setIsLogin] = useState(true)
    const [role, setRole] = useState("applicant")
    const [error, setError] = useState("")
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleLoginSubmit = async (e) => {
        e.preventDefault()

        try {

            const name = nameRef.current.value
            const emailId = emailRef.current.value
            const password = passwordRef.current.value

            const res = await axios.post(BASE_URL + "/auth/signup", {
                name, emailId, password, role
            }, {withCredentials: true})

            const user = res?.data?.user

            dispatch(addUser(user))
            navigate("/home")

        }
        catch (err) {
            console.log("The error is", err)
            const errMessage = err?.response?.data?.message || err.message
            setError(errMessage)
        }

    }

    return (
        <div className="relative h-screen">
            <div className="absolute inset-0">
                <div className="absolute top-0 -z-10 h-full w-full bg-white [&>div]:absolute [&>div]:bottom-auto [&>div]:left-auto [&>div]:right-0 [&>div]:top-0 [&>div]:h-[500px] [&>div]:w-[500px] [&>div]:-translate-x-[30%] [&>div]:translate-y-[20%] [&>div]:rounded-full [&>div]:bg-[rgba(173,109,244,0.5)] [&>div]:opacity-50 [&>div]:blur-[80px]">
                    <div></div>

                </div>
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
                <div className="max-w-3xl text-center">
                    <div className='min-h-screen isolate'>
                        <div className="flex my-20 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                                    Sign in to your account
                                </h2>
                            </div>

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form action="#" method="POST" className="space-y-4" onSubmit={handleLoginSubmit} >

                                    {
                                        !isLogin &&
                                        <div className=''>
                                            <div>
                                                <label htmlFor="name" className="text-left block text-sm/6 font-medium text-gray-900">
                                                    Your name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        ref={nameRef}
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        required
                                                        autoComplete="name"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    }

                                    <div className=''>
                                        <div>
                                            <label htmlFor="email" className="text-left block text-sm/6 font-medium text-gray-900">
                                                Email address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    ref={emailRef}
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    autoComplete="email"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                                Password
                                            </label>
                                            {/* <div className="text-sm">
                                                <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                    Forgot password?
                                                </Link>
                                            </div> */}
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                ref={passwordRef}
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                    {
                                        !isLogin &&
                                        <div>
                                            <div className="mt-2">
                                                <SelectRole role={role} setRole={setRole} />
                                            </div>
                                        </div>

                                    }

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full hover:cursor-pointer justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign in
                                        </button>
                                        {
                                            error &&
                                            <div className='w-full'>
                                                <div>
                                                    <div className="mt-2">
                                                        <p className='text-red-500 text-sm'>{error}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                </form>

                                <p className="mt-10 text-center text-sm/6 text-gray-500">
                                    {isLogin ? "Not a member?" : "Already have an account?"}{' '}
                                    <Link onClick={() => setIsLogin(() => !isLogin)} to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        {isLogin ? "Create account" : "Log in"}
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn