import GalleryOne from '@img/GalleryOne.jpg'
import GalleryTwo from '@img/GalleryTwo.jpg'
import GalleryThree from '@img/GalleryThree.jpg'
import GalleryFour from '@img/GalleryFour.jpg'
import GalleryFive from '@img/GalleryFive.jpg'
import GallerySix from '@img/GallerySix.jpg'
import GallerySeven from '@img/GallerySeven.jpg'
import GalleryEight from '@img/GalleryEight.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'


const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className='bg-[#E6EDE8] pt-16 pb-5  md:py-16 mb-10 md:mb-16 lg:mb-24'>
            <div className='container mx-auto rounded-2xl'>
                <div className='box'>
                    <div className='relative flex flex-col md:flex-row items-center'>
                        <p className='w-full md:w-1/2 lg:w-2/3 font-bold text-center md:text-left text-4xl lg:text-6xl text-[#4C524E]'>Exclusive Property <br /> <span className='text-[#556358]'>Showcase</span></p>
                        <p className='w-full md:w-1/2 lg:w-1/3 text-sm max-w-sm text-gray-500 text-center md:text-left mt-4 md:mt-0 font-semibold'>Explore our curated selection of featured properties that exemplify luxury, quality, and exceptional value. From elegant urban penthouse with panoramic city views to sprawling countryside estate.</p>
                    </div>

                    <div className='hidden md:block relative h-20'>
                        <div className='absolute mt-5 right-auto top-0 bottom-4 md:bottom-auto  md:right-10 flex justify-center items-center gap-x-5'>
                            <div className="swBtnBack rounded-full cursor-pointer p-2  border border-[#556358] pulse  text-[#556358] hover:bg-[#556358] hover:text-white"><IoIosArrowBack size={25} /> </div>
                            <div className=" swBtnNext rounded-full cursor-pointer p-2 border border-[#556358] pulse  text-[#556358] hover:bg-[#556358] hover:text-white"><IoIosArrowForward size={25} /></div>
                        </div>
                    </div>
                    <Swiper
                        className=' bg-transparent overflow-hidden'
                        loop={true}
                        onSlideChange={(swiper) => { setActiveIndex(swiper.realIndex) }}
                        module
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        speed={2000}
                        modules={[Autoplay, Pagination, Navigation]} navigation={{ nextEl: '.swBtnNext', prevEl: '.swBtnBack' }}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 15 },
                            768: { slidesPerView: 2, spaceBetween: 15 },
                            1024: { slidesPerView: 3, spaceBetween: 15 },
                        }} >
                        {[GalleryOne, GalleryTwo, GalleryThree, GalleryFour, GalleryFive, GallerySix, GallerySeven, GalleryEight].map((item, index) => (
                            <SwiperSlide key={index} className={`min-h-[400px] transition-all duration-[2000ms] overflow-hidden ${index === activeIndex ? 'shadow-lg rounded-2xl bg-white p-5' : ''}`}>
                                <div className='h-full relative'>
                                    <div className={`${index === activeIndex ? 'flex justify-end items-end' : 'w-full '}`}>
                                        <div className='w-full h-full flex flex-col justify-end items-end relative'>
                                            <img src={item} className={`object-cover rounded-xl transition-all ${index === activeIndex ? 'h-[300px] w-full duration-[1500ms]' : 'h-[400px] w-full duration-[1500ms]'}`} alt="" />
                                        </div>
                                    </div>
                                    <button className={`absolute left-1/2 w-1/2 text-center transform -translate-x-1/2 bottom-[-60px] transition-all ${index === activeIndex ? 'opacity-100 duration-[6000ms]' : 'opacity-0 duration-[1000ms]'} px-5 py-1.5 rounded-2xl  border border-[#556358] hover:bg-[#556358] hover:text-white pulse text-[#556358] font-semibold`}>Contact Us</button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper >
                    <div className='md:hidden flex justify-center items-center gap-x-6 h-20'>
                        <div className="swBtnBack rounded-full cursor-pointer p-2  border border-[#556358] pulse  text-[#556358] hover:bg-[#556358] hover:text-white"><IoIosArrowBack size={25} /> </div>
                        <div className=" swBtnNext rounded-full cursor-pointer p-2 border border-[#556358] pulse  text-[#556358] hover:bg-[#556358] hover:text-white"><IoIosArrowForward size={25} /></div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Gallery