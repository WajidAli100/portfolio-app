import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { FaMedium } from 'react-icons/fa'
import Link from 'next/link'

const SoicalIcons = () => {
    return (
        <div>
            <Link href={"https://www.linkedin.com/"} target='_blank'> <div className="ml-[-86px] hover:ml-0 duration-200 bg-gray-600 text-white flex gap-2 items-center text-lg fixed top-[30vh] w-32 py-3 px-5 rounded-r-lg">
                LinkdIn
                <FaLinkedin size={25} />
            </div></Link>
            <Link href={"https://github.com/"} target='_blank'>
                <div className="ml-[-86px] hover:ml-0 duration-200 bg-gray-600 text-white flex gap-2 items-center text-lg fixed top-[40vh] w-32 py-3 px-5 rounded-r-lg">
                    GitHub
                    <BsGithub size={25} />
                </div></Link>
            <Link href={"https://medium.com/"} target='_blank'></Link>
            <div className="ml-[-86px] hover:ml-0 duration-200 bg-gray-600 text-white flex gap-2 items-center text-lg fixed top-[50vh] w-32 py-3 px-5 rounded-r-lg">
                Medium
                <FaMedium size={25} />
            </div>
        </div>
    )
}

export default SoicalIcons