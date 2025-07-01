import { useEffect, useState, lazy } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from './Loader'

const SingleOpportunity = lazy(() => import('./SingleOpportunity'))


export default function Opportunities() {

    const [opportunities, setOpportunities] = useState([])

    const navigate = useNavigate()

    const params = useParams()
    const type = params?.type

    const getOpportunities = async () => {
        try {
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

    if(opportunities.length == 0) {
        return <Loader />
    }

    return (
        <div className='min-h-screen py-20 mx-2'>
            {
                opportunities.map(opportunity => (
                    <div key={opportunity._id} >
                        <SingleOpportunity opportunity={opportunity} showViewButton={true} />
                    </div>
                ))
            }
        </div>
    )
}
