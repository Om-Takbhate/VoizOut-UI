import React from 'react'

const OpportunitiesDescriptionSkeleton = () => {
    return (
        <div className="lg:flex mx-4 mt-16 lg:justify-between py-6 min-h-screen sm:px-16 ">
            <div className="min-w-0 flex-1">
                <div role="status" className=" animate-pulse">
                    <div className="h-40 bg-gray-200 rounded-xs dark:bg-gray-700 w-full mb-12"></div>
                    <div className="flex items-center mt-16 ml-8">
                        <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                    </div>
                    <div className="h-2 ml-8 mt-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div className="h-2 ml-8 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div className="h-2 ml-8 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>


            </div>
        </div>
    )
}

export default OpportunitiesDescriptionSkeleton