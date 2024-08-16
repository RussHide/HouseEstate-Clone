import AmenityOne from '@img/AmenityOne.jpg'
import AmenityTwo from '@img/AmenityTwo.jpg'
import AmenityThree from '@img/AmenityThree.jpg'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'

const Amenities = () => {
    return (
        <div className="container mx-auto mb-10 md:mb-16 lg:mb-24 ">
            <div className="mt-10 md:mt-16 lg:mt-24 mx-3 md:mx-10 " >
                <div className='flex flex-col md:flex-row items-center w-full mb-12'>
                    <p className='w-full md:w-1/2 font-bold text-5xl text-center md:text-left lg:text-6xl text-[#4C524E]'>Different Types of<br className='hidden md:block' /> <span className='text-[#556358]'>Land Available</span></p>
                    <p className='w-full md:w-1/2  lg:text-lg text-gray-400 text-center md:text-left font-semibold px-3 md:px-10 mt-5 md:mt-0'>Here is a diverse selection of land categories to suit every investor and buyer. Whether youa are seeking residential plots for your dream home, commercial parcels for business ventures, or expansive agricultural tracts</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="relative">
                        <div className='hidden md:flex justify-center items-center w-full'>
                            <span className='mb-10 w-2/3  text-center inline-block text-[#3E5744] bg-[#E6EDE8] px-8 py-1 font-semibold text-lg  rounded-full border border-[#3E5744]'>Amenities</span>
                        </div>
                        <img src={AmenityOne} className="rounded-2xl h-[400px] md:h-[395px] lg:h-[600px] w-full object-cover" alt="" />
                        <div className=' absolute bottom-0 left-0 p-3 lg:p-5 text-white'>
                            <p className='text-2xl lg:text-3xl mb-3'>Residential Land</p>
                            <p className=' text-sm lg:text-xl text-gray-300'>Discover prime residential land perfect for building your dream home.</p>
                        </div>
                    </div>
                    <div className='md:hidden flex justify-center items-center gap-5 '>
                            <IoArrowBack className='text-gray-400' size={40} />
                            <IoArrowForward className='' size={40} />
                        </div>
                    <div className="hidden md:block relative h-fit">
                        <img src={AmenityTwo} className="h-[400px] md:h-[425px] lg:h-[640px] w-full object-cover rounded-2xl" alt="" />
                        <div className='flex justify-center items-center gap-5 absolute pt-5 left-16 lg:left-44'>
                            <IoArrowBack className='text-gray-400' size={40} />
                            <IoArrowForward className='' size={40} />
                        </div>
                        <div className='absolute bottom-0 left-0 md:p-3 lg:p-5 text-white'>
                            <p className='text-2xl lg:text-3xl mb-3'>Agricultural Land</p>
                            <p className='text-sm lg:text-xl text-gray-300'>Invest in fertile agricultural land ideal for farming and crop cultivation.</p>
                        </div>
                    </div>
                    <div className="hidden md:block relative h-fit">
                        <p className="text-[#556358] font-semibold text-2xl lg:text-3xl mb-10">Unvelling Major Land Market Trends and Insights</p>
                        <img src={AmenityThree} className="h-[400px] md:h-[320px] lg:h-[480px] w-full object-cover rounded-2xl" alt="" />
                        <div className='absolute bottom-0 left-0 md:p-3 lg:p-5 text-white'>
                            <p className='text-2xl lg:text-3xl mb-3'>Waterfront Land</p>
                            <p className='text-sm lg:text-xl text-gray-300'>Experience waterfront living with our exclusive listings of coastal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Amenities



{/* <div className='relative '>
                        <div className='absolute mt-5 right-auto top-0 bottom-4 md:bottom-auto  md:right-10 flex justify-center items-center gap-x-5'>
                            <div className="swBtnBack rounded-full cursor-pointer p-2  border border-[#556358] pulse  text-[#556358] hover:bg-[#556358] hover:text-white"><IoIosArrowBack size={25} /> </div>
                            <div className=" swBtnNext rounded-full cursor-pointer p-2 border border-[#556358] pulse  text-[#556358] hover:bg-[#556358] hover:text-white"><IoIosArrowForward size={25} /></div>
                        </div>
                    </div> */}

                    