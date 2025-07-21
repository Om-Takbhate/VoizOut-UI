import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BASE_URL, dateStringFunction } from '../utils/constants'
import Loader from './Loader'
import { BriefcaseIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'
import UserCard from './UserCard'
import { CalendarDateRangeIcon } from '@heroicons/react/24/solid'
import { ArrowUpOnSquareStackIcon } from '@heroicons/react/16/solid'

const ExperienceDescription = () => {

  const [experience, setExperience] = useState(null)
  const params = useParams()


  const getExperience = async () => {
    try {
      const experienceId = params.experienceId

      const res = await axios.get(BASE_URL + `/api/v1/experience/${experienceId}`, {
        withCredentials: true
      })

      setExperience(prev => res.data.data)

    }
    catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    getExperience()
  }, [])


  if (experience == null) {
    return <Loader />
  }


  return (
    <div className='w-full min-h-screen '>


      <main className="mt-30 mx-6 md:mx-12 lg:mx-26 min-h-screen mb-20">

        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight">
              {experience.title}
            </h2>
            <div className='mt-2 ml-2 flex flex-col md:flex-row gap-4'>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <BriefcaseIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
                {experience.type}
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <BuildingOffice2Icon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
                {experience.companyName}
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <CalendarDateRangeIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
                {dateStringFunction(experience.createdAt)}
              </div>
            </div>
          </div>

          {/* <img src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="w-full object-cover lg:rounded" /> */}
        </div>

        <div className="lg:flex lg:justify-between flex-col py-6 px-2  mt-5 ">
          <h2 className='text-lg font-bold'>Posted by</h2>
          <ul role="list" className="grid gap-y-12 mt-4 bg-gray-50 rounded-xl hover:bg-gray-100 py-1">

            {experience.author ?
              <Link to={"/profile/" + experience.author._id} className=' px-2 py-1'>
                <UserCard person={experience.author} />
              </Link>
              : <UserCard person={experience.author} />
            }
          </ul>
        </div>

        <div className="flex flex-col px-2  lg:space-x-12">

          <h2 className='text-lg font-bold'>Description</h2>
          <div className="px-4 bg-gray-50 lg:px-4 py-2 mt-2 text-gray-700 text-lg leading-relaxed w-full ">
            {
              experience.description.split("\n").map((para, index) => (
                <p key={index} className='mt-4'>{para}</p>
              ))
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default ExperienceDescription