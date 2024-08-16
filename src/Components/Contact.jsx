import ContactImage from '@img/ContactImage.jpg'

const Contact = () => {
    return (
        <div className='mb-8 md:mb-12 lg:mb-20'>
            <div className="bg-[#F4F8F5] relative flex justify-end min-h-[80vh] lg:min-h-[100vh]">
                <div className='w-full md:w-[70%] relative'>
                    <div className=' p-8 rounded-2xl w-full md:w-[90%] lg:w-[60%] static md:absolute bg-[#E6EDE8] md:-left-[30%] md:top-1/2 transform md:-translate-y-1/2  container mx-auto'>
                        <p className='text-[#4C524E] text-center md:text-left font-bold text-3xl'>¿Tienes alguna duda en la que podamos ayudarte?</p>
                        <p className='text-[#556358] text-center md:text-left font-semibold mt-4'>Contactate con nosotrs y resolveremos todas tus dudas</p>
                        <div className='mt-5 grid grid-cols-2 gap-x-5 gap-y-4'>
                            <div className='space-y-3'>
                                <p className='text-[#656970] font-semibold'>Full Name</p>
                                <input type="text" placeholder='Fabian Hide' className='w-full px-5 py-2 bg-[#F4F8F5] placeholder:text-[#7996A4] focus:ring-0 ring-0 focus:outline-none outline-none rounded-md ' />
                            </div>
                            <div className='space-y-3'>
                                <p className='text-[#656970] font-semibold'>Email</p>
                                <input type="text" placeholder='hide@gmail.com' className='w-full px-5 py-2 bg-[#F4F8F5] placeholder:text-[#7996A4] focus:ring-0 ring-0 focus:outline-none outline-none rounded-md ' />
                            </div>
                            <div className='space-y-3'>
                                <p className='text-[#656970] font-semibold'>Phone Number</p>
                                <input type="text" placeholder='(111) 2222-3344' className='w-full px-5 py-2 bg-[#F4F8F5] placeholder:text-[#7996A4] focus:ring-0 ring-0 focus:outline-none outline-none rounded-md ' />
                            </div>
                            <div className='space-y-3'>
                                <p className='text-[#656970] font-semibold'>Adress</p>
                                <input type="text" placeholder='123 Main Street, Suite 100' className='w-full px-5 py-2 bg-[#F4F8F5] placeholder:text-[#7996A4] focus:ring-0 ring-0 focus:outline-none outline-none rounded-md ' />
                            </div>
                            <div className='space-y-3 col-span-2 '>
                                <p className='text-[#9CA3AF] font-semibold'>Message</p>
                                <textarea rows={7} placeholder='Type' className='w-full px-5 py-2 bg-[#F4F8F5] placeholder:text-[#7996A4] focus:ring-0 ring-0 focus:outline-none outline-none rounded-md '></textarea>
                            </div>
                            <button className='bg-[#51C878] text-white font-semibold text-sm h-full w-full py-4 rounded-md col-span-2'>Send Message</button>
                        </div>
                    </div>
                    <img src={ContactImage} className='hidden md:block w-full h-full object-cover' alt="" />
                </div>
            </div>
        </div>

    )
}

export default Contact