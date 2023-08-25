import React from 'react'
import uni1 from "../../../../images/img/uni1.jpg"
import uni2 from "../../../../images/img/uni2.jpg"
import uni3 from "../../../../images/img/uni3.jpg"
import uni4 from "../../../../images/img/uni4.jpg"
import uni5 from "../../../../images/img/uni5.jpg"
import uni6 from "../../../../images/img/uni6.jpg"

const Patner = () => {
    return (
        <div className='grid grid-cols-5 mt-10 m-6'>
            <div className='col-span-5 md:col-span-2 flex mt-8'>
                <div className=''>
                <h1 className='text-3xl font-bold '>Our MBBS Abroad Patners</h1>
                <hr className="h-[0.1rem] bg-green-400  w-[8rem] " />
                <p className='my-4'>In our pursuit of ensuring quality service, we have tied-up with the rop and most perstigious medical universities worldwide</p>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 md:col-span-3 col-span-5 gap-5 md:mx-[7%]'>
  {/* Card 1 */}
  <div className='flex items-stretch justify-center col-span-1'>
    <div className='border text-center p-2 text-bold text-sm shadow-xl rounded-xl flex flex-col justify-between'>
      <div className='object-center flex items-center justify-center'>
        <img src={uni1} alt="" className='h-[10rem] w-[10rem] sm:h-[10rem] sm:w-[10rem] md:h-[100%] md:w-[100%]' />
      </div>
      <div className="font-bold">Kharkiv</div>
    </div>
  </div>

  {/* Card 2 */}
  <div className='flex items-stretch justify-center col-span-1'>
    <div className='border text-center p-2 text-bold text-sm shadow-xl rounded-xl flex flex-col justify-between'>
      <div className='object-center flex items-center justify-center'>
        <img src={uni2} alt="" className='h-[10rem] w-[10rem] sm:h-[10rem] sm:w-[10rem] md:h-[100%] md:w-[100%]' />
      </div>
      <div className="font-bold">University Name</div>
    </div>
  </div>
  
  {/* Card 3 */}
  <div className='flex items-stretch justify-center col-span-1'>
    <div className='border text-center p-2 text-bold text-sm shadow-xl rounded-xl flex flex-col justify-between'>
      <div className='object-center flex items-center justify-center'>
        <img src={uni3} alt="" className='h-[10rem] w-[10rem] sm:h-[10rem] sm:w-[10rem] md:h-[100%] md:w-[100%]' />
      </div>
      <div className="font-bold">University Name</div>
    </div>
  </div>

  {/* Card 4 */}
  <div className='flex items-stretch justify-center col-span-1'>
    <div className='border text-center p-2 text-bold text-sm shadow-xl rounded-xl flex flex-col justify-between'>
      <div className='object-center flex items-center justify-center'>
        <img src={uni4} alt="" className='h-[10rem] w-[10rem] sm:h-[10rem] sm:w-[10rem] md:h-[100%] md:w-[100%]' />
      </div>
      <div className="font-bold">Kharkiv</div>
    </div>
  </div>

  {/* Card 5 */}
  <div className='flex items-stretch justify-center col-span-1'>
    <div className='border text-center p-2 text-bold text-sm shadow-xl rounded-xl flex flex-col justify-between'>
      <div className='object-center flex items-center justify-center'>
        <img src={uni5} alt="" className='h-[10rem] w-[10rem] sm:h-[10rem] sm:w-[10rem] md:h-[100%] md:w-[100%]' />  
      </div>
      <div className="font-bold">University Name</div>
    </div>
  </div>

  {/* Card 6 */}
  <div className='flex items-stretch justify-center col-span-1'>
    <div className='border text-center p-2 text-bold text-sm shadow-xl rounded-xl flex flex-col justify-between'>
      <div className='object-center flex items-center justify-center'>
        <img src={uni6} alt="" className='h-[10rem] w-[10rem] sm:h-[10rem] sm:w-[10rem] md:h-[100%] md:w-[100%]' />
      </div>
      <div className="font-bold">University Name</div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Patner
