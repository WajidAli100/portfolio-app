import React from 'react'
import Wraper from './Wraper'

const Contact = () => {
    return (
        <section className=" flex items-center max-w-7xl mx-auto leading-8 mb-10">
            <Wraper>
                <div className="px-10 mt-32 mx-auto">
                    <h1 className="text-center text-4xl ">Contact</h1>
                    <p className="text-center my-5">Get in touch with me</p>
                    <form action="https://formspree.io/f/mbjeaqpn" method="POST">
                        <div>
                            <input
                                placeholder="Your name"
                                type="text"
                                required
                                name="name"
                                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none"
                            />
                        </div>
                        <div className="my-5">
                            <input
                                required
                                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none"
                                placeholder="Your email"
                                type="email"
                                name="email"
                            />
                        </div>
                        <div>
                            <textarea
                                rows={8}
                                name="meraMessage"
                                required
                                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none"
                                placeholder="Your message here..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="mx-auto block px-5 hover:scale-105 duration-150 rounded-md  bg-gradient-to-l from-cyan-400 text-white to-gray-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </Wraper>
        </section>
    )
}

export default Contact