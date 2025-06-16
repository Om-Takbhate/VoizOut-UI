import React from 'react'
import Pagination from './Pagination'
import Carousel from './Carousel'
import { testimonials } from '../utils/constants'

const Testimonials = () => {
    return (
        <>
            <div className='w-full min-h-screen flex justify-center items-center bg-gray-100'>
                <Carousel data={testimonials} />
            </div>
        </>
    )
}

export default Testimonials