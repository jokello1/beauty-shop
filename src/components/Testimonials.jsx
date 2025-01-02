import React from 'react'

const Testimonials = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://randomuser.me/api/portraits/women/1.jpg" />
                            <p className="leading-relaxed">I had an amazing experience at this beauty salon. The staff is incredibly professional and the services are top-notch. My skin has never felt better!</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Emily Brown</h2>
                            <p className="text-gray-500">Customer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://randomuser.me/api/portraits/women/2.jpg" />
                            <p className="leading-relaxed">The ambiance of the salon is so relaxing and the treatments are very effective. I always leave feeling rejuvenated and refreshed. Highly recommend!</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Sophia Johnson</h2>
                            <p className="text-gray-500">Customer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://randomuser.me/api/portraits/women/3.jpg" />
                            <p className="leading-relaxed">This is the best beauty salon I've ever been to. The staff is friendly and knowledgeable, and the services are exceptional. I always look forward to my appointments here.</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Olivia Williams</h2>
                            <p className="text-gray-500">Customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials