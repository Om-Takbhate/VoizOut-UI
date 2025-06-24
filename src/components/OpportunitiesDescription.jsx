import { useEffect, useState } from 'react'
import OpportunitiesDescriptionSkeleton from './skeletons/OpportunitiesDescriptionSkeleton'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import SingleOpportunity from './SingleOpportunity'
import UserCard from './UserCard'
import Skills from './Skills'

export default function OpportunitiesDescription() {

    const [opportunity, setOpportunity] = useState({})
    const params = useParams()

    const navigate = useNavigate()

    const getOpportunity = async () => {
        try {
            const jobId = params.jobId

            if (!jobId) {
                navigate("/404")
            }

            const res = await axios.get(BASE_URL + "/api/v1/opportunities/job/" + jobId, { withCredentials: true })
            setOpportunity(res.data.data)
        }
        catch (err) {
            alert(err.message)
        }
    }

    useEffect(() => {
        getOpportunity()
    }, [])

    if (Object.keys(opportunity).length == 0) return <OpportunitiesDescriptionSkeleton />;

    return (
        <div className="mx-2 px-2 mt-15 lg:justify-between py-2  sm:px-12 min-h-screen mb-20">
            <SingleOpportunity opportunity={opportunity} showViewButton={false} />

            <div className="lg:flex mx-2 lg:justify-between flex-col py-6 px-2 sm:px-4 mt-5 ">
                <h2 className='text-lg font-bold'>Posted by</h2>
                <ul role="list" className="grid gap-y-12 mt-4 bg-gray-50 rounded-xl hover:bg-gray-100 py-1">
                    <Link to={"/profile/" + opportunity.recruiter._id} className=' px-2 py-1'>
                        <UserCard person={opportunity.recruiter} />
                    </Link>
                </ul>
            </div>

            <div className="lg:flex mx-2 lg:justify-between py-6 px-2  sm:px-4 mt-5 ">
                <h2 className='text-lg font-bold'>Description</h2>
            </div>
            <div className="lg:flex mx-2 lg:justify-between pr-4  sm:px-4 mt-5 ">
                <p>{opportunity.description}</p>
            </div>
            <div className='lg:flex mx-2 lg:justify-between pr-4  sm:px-4 mt-5'>
                <Skills skills={opportunity.skills} showBorder={false} />
            </div>
        </div>
    )
}
