"use client"
import React, { useState } from 'react'
import Wraper from '@/components/Wraper'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx'

export default function Header() {
    const [toggle, setToggle] = useState(true)
    return (
        <section>
            <Wraper>
                <div className='flex justify-between items-center'>
                    <h1 className='font-customFont m-7'>Wajid Ali</h1>
                    <ul className='justify-around m-7 md:flex hidden'>
                        <li className='text-xl mx-5 hover:scale-125 duration-500'>Home</li>
                        <li className='text-xl mx-5 hover:scale-125 duration-500'>About</li>
                        <li className='text-xl mx-5 hover:scale-125 duration-500'>Portfolio</li>
                        <li className='text-xl mx-5 hover:scale-125 duration-500'>Skills</li>
                        <li className='text-xl mx-5 hover:scale-125 duration-500'>Contact</li>
                    </ul>
                    <div className='pr-5 items-center md:hidden z-10' onClick={() => { setToggle(!toggle); }}>
                        {toggle ? <GiHamburgerMenu size={30} /> : <RxCross2 size={30} />}
                    </div>
                    {!toggle ?
                        <div className='fixed top-0 left-0 bg-gray-500 h-screen justify-center w-full pt-8 flex'>
                            <ul className='m-7'>
                                <li className='text-xl mx-5 hover:scale-125 duration-500'>Home</li>
                                <li className='text-xl mx-5 hover:scale-125 duration-500'>About</li>
                                <li className='text-xl mx-5 hover:scale-125 duration-500'>Portfolio</li>
                                <li className='text-xl mx-5 hover:scale-125 duration-500'>Skills</li>
                                <li className='text-xl mx-5 duration-500'>Contact</li>
                            </ul>

                        </div> : null}
                </div>
            </Wraper>
        </section>
    )
}
