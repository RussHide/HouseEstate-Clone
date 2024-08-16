import { IoArrowForward } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import Logo from '@img/Logo.webp'


const Footer = () => {
    return (
        <div className="container mx-auto pb-5 ">
            <div className="sm:box md:no-box flex flex-col md:flex-row  sm:w-full md:w-auto">
                <div className="w-full md:w-1/2">
                    <p className=' font-bold text-4xl text-center md:text-left text-[#4C524E]'>Ready to Find Your Perfect<br /> <span className='text-[#556358]'>Property?</span></p>
                    <div className="relative w-full px-10 md:px-0 md:w-5/6 mb-4 my-7 lg:mt-10 lg:mb-8">
                        <input type="text" className="bg-[#E9EFEB]  rounded-full py-3.5 px-6 w-full placeholder:text-sm" placeholder="Find your property... " />
                        <IoArrowForward className='bg-[#3E5744] absolute p-3 rounded-full text-white right-10 md:right-1.5 bottom-1' size={45} />
                    </div>
                    <div className="flex justify-center md:justify-start gap-x-4 items-center">
                        <button className='flex px-3 lg:px-8 py-1 lg:py-2.5 rounded-2xl justify-between items-center border my-6 border-[#556358] hover:bg-[#556358] hover:text-white pulse text-[#556358] font-semibold'>Email<MdOutlineArrowOutward className='mt-1 ml-1' /></button>
                        <button className='flex px-3 lg:px-8 py-1 lg:py-2.5 rounded-2xl justify-between items-center border my-6 border-[#556358] hover:bg-[#556358] hover:text-white pulse text-[#556358] font-semibold'>Instagram <MdOutlineArrowOutward className='mt-1 ml-1' /></button>
                        <button className='flex px-3 lg:px-8 py-1 lg:py-2.5 rounded-2xl justify-between items-center border my-6 border-[#556358] hover:bg-[#556358] hover:text-white pulse text-[#556358] font-semibold'>Facebook <MdOutlineArrowOutward className='mt-1 ml-1' /></button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-full flex flex-col items-center md:items-end gap-y-2 ">
                    <ul className="flex justify-end items-start gap-5 font-semibold text-[#393836] text-xl">
                        <li>About</li>
                        <li>Agents</li>
                        <li>Service</li>
                        <li>Contact Us</li>
                    </ul>
                    <img src={Logo} className='w-24' alt="" />
                    <p className="text-[#8C968D]">Realices Real Estate Agency</p>
                    <div className="text-[#8C968D] my-2 text-right">
                        <p>123 Main Street, Moontown</p>
                        <p>Cityville, Stateville</p>
                    </div>
                    <p className="text-[#8C968D] mb-2">Zip code: 12345</p>
                    <p className="text-[#8C968D]">United States</p>
                </div>
            </div>
        </div>
    )
}

export default Footer