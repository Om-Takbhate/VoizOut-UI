import React from 'react'
import { dateStringFunction, DEFAULT_USER_IMAGE } from '../utils/constants'
import { BuildingOffice2Icon, UserCircleIcon, UserIcon } from '@heroicons/react/24/outline'

const SingleExperience = ({ experience }) => {

    const date = new Date(experience.createdAt)
    const dateString = dateStringFunction(date)

    return (
        <li className="flex hover:bg-gray-100 px-4 rounded-lg cursor-pointer justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <img alt="" src={experience.author.photoUrl || DEFAULT_USER_IMAGE} className="size-12 flex-none rounded-full bg-gray-50" />
                <div className="min-w-0 flex-auto">
                    <p className="text-md font-semibold text-gray-900">{experience.title}</p>
                    <div className='flex gap-4'>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <UserCircleIcon aria-hidden="true" className="mr-1.5 size-4 shrink-0 text-gray-400" />
                            {experience?.author.name || "Anonymous User"}
                        </div>

                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <BuildingOffice2Icon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
                            {experience.companyName}
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm/6 text-gray-900">{experience.author.role}</p>
                {dateString ? (
                    <p className="mt-1 text-xs/5 text-gray-500">
                        Posted on <time dateTime={dateString}>{dateString}</time>
                    </p>
                ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="size-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs/5 text-gray-500">Online</p>
                    </div>
                )}
            </div>
        </li>
    )
}

export default SingleExperience