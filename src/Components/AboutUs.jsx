import AboutUsOne from '@img/AboutUsOne.jpg'
import AboutUsTwo from '@img/AboutUsTwo.jpg'
import AboutUsThree from '@img/AboutUsThree.jpg'
import { FiArrowRight } from 'react-icons/fi'


const AboutUs = () => {
  return (
    <div className='bg-[#E6EDE8] py-10 mb-10 md:mb-16 lg:mb-24'>
      <div className="container mx-auto ">
        <div className=" mx-3 md:mx-10 flex flex-col md:flex-row gap-5 h-full gap-x-10">
          <div className="w-full order-2 md:order-1 lg:w-1/2 grid grid-cols-2 gap-5 place-items-center ">
            <img className='place-self-end object-contain rounded-2xl col-span-2' src={AboutUsOne} alt="" />
            <img className='object-contain place-self-start  rounded-2xl' src={AboutUsTwo} alt="" />
            <img className='object-contain place-self-start rounded-2xl' src={AboutUsThree} alt="" />
          </div>
          <div className="w-full lg:w-1/2 order-1 md:order-2 flex flex-col justify-center items-start space-y-5 lg:space-y-10">
            <span className='text-[#3E5744] bg-[#E6EDE8] px-4 py-1 font-semibold text-lg  rounded-full border border-[#3E5744]'>About Us</span>
            <p className='font-semibold text-3xl lg:text-5xl'>Your Trusted Partner in Real Estate</p>
            <div className='space-y-3 lg:space-y-6 text-gray-500 text-xl font-semibold' >
              <p className='text-[#556358] '>TOP LUXURY REAL ESTATE INDUSTRY LEADER 2021.</p>
              <p className='text-sm lg:text-sm'>An excellent real estate professional, integrity, in-depth community and market knowledge, marketing savvy, effective negotiation skills and a high-quality.</p>
              <p className='text-sm lg:text-sm'>professional network, all of which are hallmarks of how Riez! Baker works. Contact her today to learn more about Lake Oconee real estate and homes for sale!</p>
            </div>
            <button className='flex px-5 py-1.5 rounded-2xl text-xl justify-between items-center border my-6 border-[#556358] hover:bg-[#556358] hover:text-white pulse text-[#556358] font-semibold'>Contact Us <FiArrowRight className='mt-0.5' /></button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AboutUs