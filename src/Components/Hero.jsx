import Logo from '@img/Logo.webp'
import HeroOne from '@img/HeroOne.jpg'
import HeroTwo from '@img/HeroTwo.webp'
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import Popover from 'antd/lib/popover'
import { TbMenu2 } from "react-icons/tb";
const Navbnar = () => {
  return (
    <div className='flex lg:justify-between items-center mb-8 absolute right-0 lg:right-5 w-full z-[999]'>
      <div className='flex justify-between items-center w-full md:w-auto  mr-3 lg:mr-0 lg:gap-x-14'>
        <img src={Logo} className='w-24' alt="" />
        <ul className='hidden md:flex justify-center items-center gap-x-3 lg:gap-x-8 font-semibold text-lg text-[#7F8D83]'>
          <li>Home</li>
          <li>Explore Land</li>
          <li>Service</li>
          <li>Advertise</li>
        </ul>
        <Popover className='block md:hidden ' placement="topLeft" title={<span>Menu</span>} content={
          <div className="flex flex-col justify-center items-center gap-y-2">
            {
              ['About Us', 'Stats', 'Featured', 'Why Us', 'Gallery', 'Advisor', 'Contact', 'Subscribe'].map(item => (<a href={`#${item.replace(/\s/g, '').toLowerCase()}`} key={item} className="w-full shadow-sm bg-[#FAFAFA] hover:bg-[#275766] rounded-md pulse py-1 text-[#275766] hover:text-white px-2 font-semibold">{item}</a>))
            }
          </div>
        }>
          <div className="bg-[#546257] text-white hover:cursor-pointer px-4 py-4 rounded-2xl font-semibold w-fit"><TbMenu2 /></div>
        </Popover>
      </div>
      <ul className=" hidden md:flex justify-center items-center gap-x-3 lg:gap-x-8 font-semibold text-lg text-white top-3 right-5">
        <li className='lg:text-white md:text-[#7F8D83]'>Book a Land</li>
        <a href="contact" className="bg-[#3E5744] text-lg mr-0 lg:mr-4 px-8 py-2 rounded-full flex justify-center items-center text-[#D2D5D3] font-semibold">Contact</a>
      </ul>
    </div>
  )
}

const Hero = () => {
  return (
    <div className='container mx-auto lg:h-screen py-5 mb-8  lg:mb-20'>
      <div className='box flex lg:flex-row flex-col gap-x-10 relative '>
        <Navbnar />
        <div className='w-full lg:w-1/2 h-full '>
          <div className='mt-20 lg:mt-28'>
            <p className='text-[#4C524E] text-6xl font-bold lg:text-left text-center'>Prime Residential <br /> <span className='text-[#546257]'>Land For Sale</span></p>
            <p className='font-semibold text-2xl mb-3 mt-5 lg:mt-10 lg:text-left text-center'>Start Your Journery With Us!</p>
            <div className='flex justify-between flex-col lg:flex-row items-center mb-5 lg:mb-12 gap-y-4'>
              <p className='text-[#7F8D83] w-full lg:w-[60%] font-semibold text-lg lg:text-left text-center'>Discover the ideal spot to build your dream home with our extensive listings of prime residential land for sale.</p>
              <button className='bg-[#3E5744] text-lg mr-4 px-8 py-3 rounded-full flex justify-center  items-center text-[#D2D5D3] font-semibold'>Get Started <IoArrowForward className='ml-2' /> </button>
            </div>
          </div>
          <div className='relative h-full mb-5 lg:mb-0 '>
            <img src={HeroOne} className='rounded-2xl w-full h-[350px] lg:h-full ' alt="" />
            <p className='flex justify-center items-center top-3 left-3 gap-2 font-semibold absolute bg-white text-[#546257] rounded-full px-4 py-2'> <MdLocationPin /> Houston, TX </p>
            <div className='flex justify-center items-center absolute top-0 right-0  bg-[#F4F8F5] p-3 px-6 rounded-bl-2xl gap-x-6'>
              <IoArrowBack size={25} />
              <IoArrowForward size={25} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative  lg:min-h-[calc(100vh-40px)] flex flex-col justify-between px-0 lg:px-5 ">
          <img src={HeroTwo} className="rounded-2xl flex-grow w-full object-cover h-[350px] lg:h-full " alt="" />
          <div className='absolute bottom-3  md:bottom-10 right-3 lg:right-10 left-3 md:left-10 text-white'>
            <p className='lg:text-3xl text-2xl font-semibold'>Valley View Estates</p>
            <p className='text-gray-100  md:max-w-[70%] lg:max-w-[95%]  my-3 lg:my-5'>Nestled in the rolling hills of upstate New York, Valley View Estates offers expansive residential plots with breathtaking views of the Hudson Valley.</p>
            <div className='hidden md:flex justify-between items-center pr-5'>
              <div className='flex justify-center items-center gap-5'>
                <button className='border flex rounded-full px-4 lg:px-7 py-1.5 lg:py-3 lg:text-lg font-semibold justify-center items-center border-white text-white'>Select Type <MdKeyboardArrowDown className='mt-0.5' size={22} /> </button>
                <button className='border flex rounded-full px-4 lg:px-7 py-1.5 lg:py-3 lg:text-lg font-semibold justify-center items-center border-white text-white'>Location <MdKeyboardArrowDown className='mt-0.5' size={22} /> </button>
              </div>
              <button className=' rounded-full px-5 lg:px-10 py-1.5 lg:py-3 font-semibold lg:text-lg bg-white text-[#3E5744]'>Search</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero