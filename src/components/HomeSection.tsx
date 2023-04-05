import Image from 'next/image'
import React from 'react'
import ProfileImage from "/public/Avatar.png"
import Wraper from '@/components/Wraper'

const HomeSection = () => {
    return (
        <section>
            <Wraper>
                <div className='flex flex-col md:flex-row my-20 mx-20 gap-x-6'>
                    {/* left section */}
                    <div className='flex-1'>
                        <h1>I am a full Stack Developer</h1>
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum nostrum inventore dolorem quod sunt distinctio a! Exercitationem ipsa earum dolorum nesciunt, eos deleniti, cum ut odio iure, est consequuntur asperiores expedita quod quam magnam ex vero! Nam, temporibus fugiat, ipsam quasi rem tempora dignissimos vel quo et quae pariatur.
                        </p>
                        <button className='bg-gradient-to-r from-cyan-300 to-blue-500 my-8 hover:text-white group py-2 px-4 flex items-center  rounded-lg font-medium'>Profile
                            <svg width="8" height="11" className='ml-2 group-hover:rotate-90 duration-200' viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
                            </svg>
                        </button>
                    </div>
                    {/* right section */}
                    <div className='flex-1 '>
                        <Image src={ProfileImage} alt='profile image' className='w-60 h-64' />
                    </div>
                </div>
            </Wraper>
        </section>
    )
}

export default HomeSection