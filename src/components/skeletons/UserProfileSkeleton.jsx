import React from 'react'

const UserProfileSkeleton = () => {
    return (
        <div>
            <div className="lg:flex mx-1 mt-16 lg:justify-between py-6 min-h-screen sm:px-16 ">
                <div className="min-w-0 flex-1">
                    <div role="status" className=" animate-pulse duration-[54s]">
                        <div className="h-40 bg-gray-200 rounded-xs dark:bg-gray-500 w-full mb-12"></div>
                        <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row items-center mt-23 ">
                            <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                            <div className='mx-auto sm:mx-0'>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-32 mb-2"></div>
                                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-500"></div>
                            </div>
                        </div>
                        <div className="h-2 ml-12 mt-4 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[330px] mb-2.5"></div>
                        <div className="h-2 ml-12 bg-gray-200 rounded-full dark:bg-gray-500 max-w-full mb-2.5"></div>
                        <div className="h-2 ml-12 bg-gray-200 rounded-full dark:bg-gray-500 max-w-full"></div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default UserProfileSkeleton