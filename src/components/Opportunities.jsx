import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SingleOpportunity from './SingleOpportunity'

export default function Opportunities() {

    const [opportunities, setOpportunities] = useState([])

    const navigate = useNavigate()

    const params = useParams()
    const type = params?.type

    const getOpportunities = async () => {
        try {
            console.log("The type is :", type)
            const res = await axios.get(BASE_URL + "/api/v1/opportunities/search?type=" + type, {
                withCredentials: true
            })

            setOpportunities(() => res?.data?.data)

        }
        catch (err) {
            if (err.status == 401) {
                navigate("/login")
            }
        }

    }

    useEffect(() => {
        getOpportunities()
    }, [type])

    console.log("Opp are", opportunities)


    return (
        <div className='min-h-screen py-20'>
            {
                opportunities.map(opportunity => (
                    <Link key={opportunity._id} to={"/opportunities/description/" + opportunity._id} >
                        <SingleOpportunity opportunity={opportunity} />
                    </Link>
                ))
            }
        </div>
    )
}
