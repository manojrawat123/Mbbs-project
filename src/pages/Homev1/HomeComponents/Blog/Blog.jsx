import React from 'react';
import kz from '../../../../images/img/kz.jfif'
import kx from '../../../../images/img/kx.jfif'

const Blog = () => {
  return (
    <>
    <div className='mt-8 '>
        <span className='text-sm'>Blogs</span>
    </div>
    <div className='grid md:grid-cols-3 grid-cols-1 md:gap-20 mt-3 mb-7'>
        <div className='col-span-1'>
            <h1 className='text-3xl font-bold'>Our Latest Blog</h1>
            <hr className="h-1 bg-black  w-[2rem] inline-block" /> <hr className="h-1 bg-black  w-1 inline-block" /> <hr className="h-1 bg-black  w-1 inline-block" /> <hr className="h-1 bg-black  w-1 inline-block" /> 
        </div>
        <div className='col-span-2'>
            <p>Read through the latest blogs to learn more about study abroad essentials, Tution Fees, Universities, Intake, eligibility, admission process and more.</p>
        </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10'>

    <div className='border'>
             <div>
                <img src={kx} alt="" className='h-[100%] w-[100%]'/>
            </div>
            <h1 className='font-bold text-xl ml-2'>Study MBBS in Kazakhstan To Achieve..</h1>
            <p className='ml-2'>Kazakhstan is one of the beautiful countries that attract many students every year due to its educational pedgogy. NMC accredits the topnotch medica</p>
            <div className='text-right font-semibold mx-2'> 30 September 2021 </div>
            <br />
        </div>
   

        <div className='border'>
             <div>
                <img src={kx} alt="" className='h-[100%] w-[100%]'/>
            </div>
            <h1 className='font-bold text-xl ml-2'>Study MBBS in Kazakhstan To Achieve..</h1>
            <p className='ml-2'>Kazakhstan is one of the beautiful countries that attract many students every year due to its educational pedgogy. NMC accredits the topnotch medica</p>
            <div className='text-right font-semibold mx-2'> 30 September 2021 </div>
            <br />
        </div>


        <div className='border'>
             <div>
                <img src={kx} alt="" className='h-[100%] w-[100%]'/>
            </div>
            <h1 className='font-bold text-xl ml-2'>Study MBBS in Kazakhstan To Achieve..</h1>
            <p className='ml-2'>Kazakhstan is one of the beautiful countries that attract many students every year due to its educational pedgogy. NMC accredits the topnotch medica</p>
            <div className='text-right font-semibold mx-2'> 30 September 2021 </div>
            <br />
        </div>


    </div>
    </>
  )
}

export default Blog
