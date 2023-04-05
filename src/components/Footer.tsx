
import { AiFillFacebook } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"

export default function Footer() {
    return (
        <div className='flex h-16 bg-slate-300 mt-10 justify-between'>
            {/* icons */}
            <div className='flex m-5 gap-x-5 ml-32 items-center'>
                <div className=''>
                    <AiFillFacebook />
                </div>
                <div className=''>
                    <AiFillYoutube />
                </div>
                <div className=''>
                    <AiFillTwitterCircle />
                </div>
                <div className=''>
                    <BsInstagram />
                </div>
            </div>
            <div className='flex items-center pr-14'>
                © 2023 PIAIC - All Rights Reserved
            </div>
        </div>
    )
}
