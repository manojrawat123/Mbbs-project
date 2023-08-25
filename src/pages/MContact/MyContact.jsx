import React from 'react'
import vision from "../../images/img/vision.jpg"
import mission from "../../images/img/mission.jpg"
import doctor from "../../images/img/doctor.png"
import gradution from "../../images/img/gradution.jpg"
import doctor1 from "../../images/img/doctor1.jpg"
import { FaRegHandshake } from "react-icons/fa" 
import { ImEarth } from "react-icons/im"
import { HiUserGroup } from "react-icons/hi" 
import { BsFillTaxiFrontFill } from "react-icons/bs" 
import person1 from "../../images/img/person1.jpg"
import person2 from "../../images/img/person2.jpg"
import person3 from "../../images/img/person3.jpg"
import person4 from "../../images/img/person4.jpg"
import person5 from "../../images/img/person5.jpg"
import person6 from "../../images/img/person6.jpg"


const MyAbout = () => {
    return (
        <div>
            <div className='grid sm:grid-cols-4  my-8'>
                <div className='sm:col-span-1 flex justify-center items-center'>
                    <img src={vision} alt="" className='w-1/2 sm:w-full' />
                </div>
                <div className='sm:col-span-3 p-8'>
                    <h1 className='font-extrabold text-4xl'>Our <span className='text-red-500'>Vision</span></h1>
                    <p className='text-xl text-justify text-gray-800 my-8'>Our vision is to utilize technology in healthcare segment by providing medical career counselling, creating licensed physician via education & providing skill development courses to create a pool of paramedical force enabling an eco-system to provide accessible as well as affordable primary healthcare across large population of India.</p>
                </div>
            </div>
            <hr />
            <div className='grid sm:grid-cols-4  my-8'>
                <div className='sm:col-span-3 p-8'>
                    <h1 className='font-extrabold text-4xl'>Our <span className='text-red-500'>Mission</span></h1>
                    <p className='text-xl text-justify text-gray-800 my-8'>We aim to deliver quality healthcare to the last rural area of India by utilizing technology and creating infrastructure along with manpower. Our mission is to impact and upgrade India’s current healthcare infrastructure and eco-system to reach a level of a developed country.
                    </p>
                </div>
                <div className='sm:col-span-1 flex justify-center items-center'>
                    <img src={mission} alt="" className='w-1/2 sm:w-full' />
                </div>
            </div>
            <hr />
            <div className='grid md:grid-cols-5 md:gap-10  my-8 mx-8'>
                <div className='md:col-span-2  h-[70%] mt-[5rem] flex items-center justify-center'>
                    <img src={doctor} alt="" className='w-1/2 sm:w-[80%] ml-[10%]' />
                </div>
                <div className='md:col-span-3 md:p-8'>
                    <h1 className='font-extrabold text-4xl'>The <span className='text-red-500'>History</span></h1>
                    <p className='text-xl text-justify text-gray-800 my-8'>As against the world average of 150 doctors per lac of population, India averages only 86 available but 64 practising registered doctors. In order to fill this huge gap, India needs around 1 Million more of quality trained licensed physicians. With a huge limitation in terms of available infrastructure of medical schools in India (which produces only 75,000 doctors in 2022 from 600+ NMC approved medical colleges), the promoters started a proprietary company in 2012 in the space of student mobility by offering medical courses in global universities.
                    </p>

                    <p className='text-xl text-justify text-gray-800 my-8'>

                        By 2022, the company under the brand of MOKSH has successfully placed 1,000+ students in countries such as China, Russia, Ukraine, Georgia etc. for medical course and has reached a level of producing 500 new doctors per year to become India’s trusted and reputed company in the segment of healthcare career counselling. On an average, an Indian medical college produces around 100 doctors a year only!

                    </p>
                    <p className='text-xl text-justify text-gray-800 my-8'>
                        The company expanded its services within technology based online Education space preparing the doctors with global medical license test prep with live class. Every country including India regulates the quality of doctors by taking up license exams such as FMGE / NEXT in India or USMLE in USA or PLAB in UK. The qualification in such tests allows the doctors to practise in the respective countries. It has recently launched the test prep for NEET UG, an entrance exam taken up by the students aspiring for becoming doctors.
                    </p>
                    <p className='text-xl text-justify text-gray-800 my-8'>
                        We have started impacting and contributing the healthcare segment by taking multiple innovative initiatives.</p>
                </div>
            </div>
            <hr />

 
            <hr />

            <div className='mx-8 text-white'>
                <h1 className="text-center text">What we do for you</h1>
                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10'>
                
                <div className='bg-[#ff3b00] p-4 rounded'>
                    <div className='text-center text-5xl flex justify-center items-center'> <FaRegHandshake /></div>
                    <h1 className="text-center font-semibold text-xl">Counselling</h1>
                    <p className='text-center'>
                        Our Experienced Counsellors provide every information about the college to those students who are intrested to get admission in MCT approved medical colleges in abroad
                    </p>
                </div>
                <div className='bg-[#3f77f2] p-4 rounded'>
                    <div className='text-center text-5xl flex justify-center items-center'> <HiUserGroup /></div>
                    <h1 className="text-center font-semibold text-xl">Counselling</h1>
                    <p className='text-center'>
                        Our Experienced Counsellors provide every information about the college to those students who are intrested to get admission in MCT approved medical colleges in abroad
                    </p>
                </div>
                <div className='bg-[#42f340] p-4 rounded'>
                    <div className='text-center text-5xl flex justify-center items-center'> <ImEarth /></div>
                    <h1 className="text-center font-semibold text-xl">Counselling</h1>
                    <p className='text-center'>
                        Our Experienced Counsellors provide every information about the college to those students who are intrested to get admission in MCT approved medical colleges in abroad
                    </p>
                </div>
                <div className='bg-[#f3933f] p-4 rounded'>
                    <div className='text-center text-5xl flex justify-center items-center'> <BsFillTaxiFrontFill /></div>
                    <h1 className="text-center font-semibold text-xl">Counselling</h1>
                    <p className='text-center'>
                        Our Experienced Counsellors provide every information about the college to those students who are intrested to get admission in MCT approved medical colleges in abroad
                    </p>
                </div>
                
                </div>
            </div>

            <div className='mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10 bg-gray-200 p-4'>

                    <div className='bg-white rounded'>
                        <div className=''>
                            <div className='flex items-center justify-center'>
                            <img src={person1} alt="" className='h-[80%] w-[80%] mt-4'/>

                            </div>
                            <div className='text-center'>
                                <h1 className='text-bold text-xl '>Dhanajay Shah</h1>
                                <h2 className='text-gray-800 mb-5'>Managing Director</h2>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded'>
                        <div className=''>
                            <div className='flex items-center justify-center'>
                            <img src={person2} alt="" className='h-[80%] w-[80%] mt-4'/>

                            </div>
                            <div className='text-center'>
                                <h1 className='text-bold text-xl '>Dhanajay Shah</h1>
                                <h2 className='text-gray-800 mb-5'>Managing Director</h2>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded'>
                        <div className=''>
                            <div className='flex items-center justify-center'>
                            <img src={person3} alt="" className='h-[80%] w-[80%] mt-4'/>

                            </div>
                            <div className='text-center'>
                                <h1 className='text-bold text-xl '>Dhanajay Shah</h1>
                                <h2 className='text-gray-800 mb-5'>Managing Director</h2>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded'>
                        <div className=''>
                            <div className='flex items-center justify-center'>
                            <img src={person4} alt="" className='h-[80%] w-[80%] mt-4'/>

                            </div>
                            <div className='text-center'>
                                <h1 className='text-bold text-xl '>Dhanajay Shah</h1>
                                <h2 className='text-gray-800 mb-5'>Managing Director</h2>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded'>
                        <div className=''>
                            <div className='flex items-center justify-center'>
                            <img src={person5} alt="" className='h-[80%] w-[80%] mt-4'/>

                            </div>
                            <div className='text-center'>
                                <h1 className='text-bold text-xl '>Dhanajay Shah</h1>
                                <h2 className='text-gray-800 mb-5'>Managing Director</h2>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded'>
                        <div className=''>
                            <div className='flex items-center justify-center'>
                            <img src={person6} alt="" className='h-[80%] w-[80%] mt-4'/>

                            </div>
                            <div className='text-center'>
                                <h1 className='text-bold text-xl '>Dhanajay Shah</h1>
                                <h2 className='text-gray-800 mb-5'>Managing Director</h2>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='grid sm:grid-cols-5  my-8'>
<div className='sm:col-span-3 p-8'>
    <h1 className='font-extrabold text-4xl'>We are <span className='text-red-500'>Impacting</span></h1>
    <p className='text-xl text-justify text-gray-800 my-8'>Our vision is to utilize technology in healthcare segment by providing medical career counselling, creating licensed physician via education & providing skill development courses to create a pool of paramedical force enabling an eco-system to provide accessible as well as affordable primary healthcare across large population of India.</p>
</div>
<div className='sm:col-span-2 flex justify-center items-center'>
    <img src={gradution} alt="" className='w-1/2 sm:w-1/2' />
    <img src={doctor1} alt="" className='w-1/2 sm:w-1/2 h-[70%] mr-[5rem] roudned' />
</div>
</div>
        </div>
    )
}

export default MyAbout
