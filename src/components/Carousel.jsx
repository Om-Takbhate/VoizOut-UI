import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Carousel = ({ data }) => {

    const [testimonialIndex, setTestimonialIndex] = useState(0)

    const changeTestimonial = (operator) => {
        if (operator == "+") {
            if (testimonialIndex == data.length - 1) return;
            setTestimonialIndex(() => ((testimonialIndex + 1) % data.length))
        }
        else {
            if (testimonialIndex == 0) return;
            setTestimonialIndex(() => ((testimonialIndex - 1) % data.length))

        }
    }

    return (
        <div className="carousel w-full ">
            {
                <div key={data[testimonialIndex].message} id="slide1" className="carousel-item relative w-full flex justify-center items-center" >
                    <section className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-12 lg:px-8">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
                        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                        <div className="mx-auto max-w-2xl lg:max-w-4xl">
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
                                className="mx-auto h-12"
                            />
                            <figure className="mt-10">
                                <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                                    <p className='w-[80%] sm:w-full text-center mx-auto'>
                                        “{data[testimonialIndex].message}”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-10">
                                    <img
                                        alt=""
                                        src={data[testimonialIndex].photoUrl}
                                        className="mx-auto object-cover size-10 rounded-full"
                                    />
                                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                        <div className="font-semibold text-gray-900">{data[testimonialIndex].name}</div>
                                        <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                            <circle r={1} cx={1} cy={1} />
                                        </svg>
                                        <div className="text-gray-600 text-sm sm:text-md">{data[testimonialIndex].role}</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={() => changeTestimonial("-")} className="btn btn-circle">❮</button>
                        <button onClick={() => changeTestimonial("+")} className="btn btn-circle">❯</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Carousel