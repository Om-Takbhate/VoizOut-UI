import { Button, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { BoltIcon, BriefcaseIcon, BuildingOffice2Icon, CalendarIcon, ChevronDownIcon, CurrencyRupeeIcon, MapPinIcon, PencilIcon, WrenchScrewdriverIcon } from '@heroicons/react/20/solid'
import { BookmarkIcon, EyeIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import {  dateStringFunction } from '../utils/constants'

const SingleOpportunity = ({ opportunity, showViewButton }) => {
    const date = new Date(opportunity.deadline)

    const dateString = dateStringFunction(date)


    return (
        <>
            <div className="lg:flex mx-2 lg:justify-between py-6 px-2  sm:px-12 mt-5 bg-gray-50 hover:bg-gray-100">
                <div className="min-w-0 flex-1">
                    <h2 className="text-xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                        {opportunity.title}
                    </h2>

                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <BuildingOffice2Icon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
                            {opportunity.company}
                        </div>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        <WrenchScrewdriverIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
                        {
                            opportunity.skills.slice(0, 2).map((skill, index) => `${skill} ${index != opportunity.skills.slice(0, 2).length - 1 ? " , " : "..."}`)
                        }
                    </div>

                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <BriefcaseIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
                            {opportunity.type}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <MapPinIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
                            {opportunity.isRemote ? "Remote" : opportunity.location}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <CurrencyRupeeIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
                            {opportunity.salaryRange.min} &ndash; {opportunity.salaryRange.max}{opportunity.salaryRange.currency}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <CalendarIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
                            Closing on {dateString}
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                    {
                        showViewButton &&
                        <span className="ml-3 hidden sm:block">
                            <Link
                                to={"/opportunities/description/" + opportunity._id}
                                type="button"
                                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                            >
                                <EyeIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5 text-gray-400" />
                                View
                            </Link>
                        </span>
                    }
                    <span className="ml-3 hidden sm:block">
                        <Button
                            type="button"
                            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                        >
                            <BookmarkIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5 text-gray-400" />
                            Save
                        </Button>
                    </span>
                    <span className="sm:ml-3">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <BoltIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5" />
                            Apply
                        </button>
                    </span>

                    {/* Dropdown */}
                    <Menu as="div" className="relative ml-3 sm:hidden">
                        <MenuButton className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:ring-gray-400">
                            More
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 ml-1.5 size-5 text-gray-400" />
                        </MenuButton>

                        <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                        >
                            {/* <MenuItem>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                >
                                    Edit
                                </Link>
                            </MenuItem> */}
                            {
                                showViewButton &&
                                <MenuItem>
                                    <Link
                                        to={"/opportunities/description/" + opportunity._id}
                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                    >
                                        View
                                    </Link>
                                </MenuItem>
                            }
                            <MenuItem>
                                <Button
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden w-full text-left cursor-pointer"
                                >
                                    Save
                                </Button>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>
            </div>
        </>
    )
}

export default SingleOpportunity