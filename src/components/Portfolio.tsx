import FirstImg from '/public/images/first.png'
import Second from '/public/images/firstimg.jpeg'
import Third from '/public/images/third.jpeg'
import Forth from '/public/images/forth.png'
import Fifth from '/public/images/fifth.jpeg'
import Sixth from '/public/images/sixth.jpeg'
import Image from 'next/image'
import Wraper from '@/components/Wraper'
import React from 'react'


const Portfolio = () => {
    return (
        <section>
            <Wraper>
                <div className="px-10 mt-32 mx-auto">
                    <h1 className="text-center text-4xl mb-20">Portfolio</h1>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-24 mx-auto w-full  ">
                        {/* card 1 */}
                        <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-200 ">
                            <div className='rounded-t-md'>
                                <Image src={FirstImg} alt='first image' className='w-full h-60' />
                            </div>
                            <div className='flex justify-between px-5 bg-gray-600 text-white'>
                                <button>
                                    <a href='https://www.google.com/' target='_blank'>Demo</a>
                                </button>
                                <button>
                                    <a href='https://www.google.com/' target='_blank'>Code</a>
                                </button>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-200 ">
                            <div className='rounded-t-md'>
                                <Image src={Second} alt='first image' className='w-full h-60' />
                            </div>
                            <div className='flex justify-between px-5 bg-gray-600 text-white'>
                                <button>
                                    <a href='https://www.google.com/' target='_blank'>Demo</a>
                                </button>
                                <button>
                                    <a href='https://www.google.com/' target='_blank'>Code</a>
                                </button>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-200 ">
                            <div className='rounded-t-md'>
                                <Image src={Third} alt='first image' className='w-full h-60' />
                            </div>
                            <div className='flex justify-between px-5 bg-gray-600 text-white'>
                                <button>
                                    <a href='https://www.google.com/' target='_blank'>Demo</a>
                                </button>
                                <button>
                                    <a href='https://www.google.com/' target='_blank'>Code</a>
                                </button>
                            </div>
                        </div>
                        {/* card 4 */}
                        <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-200 ">
                            <div className='rounded-t-md'>
                                <Image src={Forth} alt='first image' className='w-full h-60' />
                            </div>
                            <div className='flex justify-between px-5 bg-gray-600 text-white'>
                                <button>
                                    <a href='https://www.google.com/' target='_blank'>Demo</a>
                                </button>
                                <button>
                                    <a href='https://www.google.com/' target='_blank'>Code</a>
                                </button>
                            </div>
                        </div>
                        {/* card 5 */}
                        <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-200 ">
                            <div className='rounded-t-md'>
                                <Image src={Fifth} alt='first image' className='w-full h-60' />
                            </div>
                            <div className='flex justify-between px-5 bg-gray-600 text-white'>
                                <button>
                                    <a href='https://www.google.com/' target='_blank'>Demo</a>
                                </button>
                                <button>
                                    <a href='https://www.google.com/' target='_blank'>Code</a>
                                </button>
                            </div>
                        </div>
                        {/* card 6 */}
                        <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-200 ">
                            <div className='rounded-t-md'>
                                <Image src={Sixth} alt='first image' className='w-full h-60' />
                            </div>
                            <div className='flex justify-between px-5 bg-gray-600 text-white'>
                                <button>
                                    <a href='https://www.google.com/' target='_blank'>Demo</a>
                                </button>
                                <button>
                                    <a href='https://www.google.com/' target='_blank'>Code</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Wraper>
        </section>
    )
}

export default Portfolio