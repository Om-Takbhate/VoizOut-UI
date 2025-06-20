import { useEffect, useState } from 'react'
import OpportunitiesDescriptionSkeleton from './skeletons/OpportunitiesDescriptionSkeleton'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import SingleOpportunity from './SingleOpportunity'
import UserCard from './UserCard'

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

        }
    }

    useEffect(() => {
        getOpportunity()
    }, [])

    if (Object.keys(opportunity).length == 0) return <OpportunitiesDescriptionSkeleton />;

    return (
        <div className="mx-4 mt-15 lg:justify-between py-2 px-2 sm:px-12 min-h-screen ">
            <SingleOpportunity opportunity={opportunity} />

            <div className="lg:flex mx-4 lg:justify-between flex-col py-6 px-2 sm:px-12 mt-5 ">
                <h2 className='text-lg font-bold'>Posted by</h2>
                <ul role="list" className="grid gap-y-12 mt-4 ">
                    <Link to={"/profile/" + opportunity.recruiter._id} className='hover:bg-gray-100 px-2 py-1'>
                        <UserCard person={opportunity.recruiter} />
                    </Link>
                </ul>
            </div>

            <div className="lg:flex mx-4 lg:justify-between py-6 px-2  sm:px-12 mt-5 ">
                <h2 className='text-lg font-semibold'>Description</h2>
            </div>
            <div className="lg:flex mx-4 lg:justify-between px-2  sm:px-12 mt-5 ">
                <p>{opportunity.description}</p>
            </div>
        </div>
    )
}
