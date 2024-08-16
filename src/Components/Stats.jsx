import StatsImage from '@img/StatsImage.jpg'
import { FiArrowRight } from 'react-icons/fi'

const Stats = () => {
    return (
        <div className="container mx-auto">
            <div className="box flex flex-col lg:flex-row justify-center items-center">
                <div className="w-full lg:w-1/2 flex flex-col md:flex-row justify-center items-center order-2 lg:order-1 gap-x-5" >
                    <div className='text-gray-400 w-full md:w-[45%] my-8'>
                        <div className='pb-5'>
                            <p className='text-[#393836] text-4xl mb-3 font-bold'>12+ Millon</p>
                            <p className='mb-3 font-semibold text-lg pr-2' >Buyers and sellers use our network every month</p>
                        </div>
                        <div className='py-5 border-y border-gray-600'>
                            <p className='text-[#393836]   text-4xl mb-3 font-bold'> 12X More</p>
                            <p className='mb-3 font-semibold text-lg pr-2'>Visits than the next land listing network</p>
                        </div>
                        <div className='pt-5'>
                            <p className='text-[#393836] text-4xl mb-3 font-bold'>1+ Millon</p>
                            <p className='mb-3 font-semibold text-lg pr-2'>Rural real estate to live in, entertain, build and invest</p>
                        </div>
                    </div>
                    <div className='w-full md:w-[60%] h-full '>
                        <img src={StatsImage} className='rounded-2xl h-[500px] lg:h-[600px] object-cover' alt="" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-0 lg:p-10 order-1 lg:order-2 flex flex-col  md:flex-none justify-center items-center md:items-start">
                    <span className='text-[#3E5744] bg-[#E6EDE8] px-8 py-1 font-semibold text-lg  rounded-full border border-[#3E5744]'>Stats</span>
                    <p className='mt-6 lg:mt-3 w-full text-center md:text-left font-bold text-5xl lg:text-6xl text-[#4C524E]'>Team Up With Us,<br  /> <span className='text-[#556358]'>Build Better</span></p>
                    <p className='md:my-7 lg:my-10 text-gray-400 text-center md:text-left  text-xl'>LandWatch is part of the Land.com Network, representing the 3 largest rural property listing sites on the Web. When you list with our network, you will reach the mostland.</p>
                    <button className='flex px-8 py-2.5 rounded-2xl justify-between items-center border my-0 md:my-6 border-[#556358] hover:bg-[#556358] hover:text-white pulse text-[#556358] font-semibold'>Contact Us <FiArrowRight className='mt-1 ml-1' /></button>
                </div>
            </div>
        </div>
    )
}

export default Stats