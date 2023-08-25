import { Link } from "react-router-dom";
import {HiOutlineMap,HiOutlineBookmark} from 'react-icons/hi2'
import College from "../../../images/college.jpg"

function Section5() {
    return ( 
        <>
                <div className="text-center mt-32 mb-10 ">
                     <h1 className="text-3xl md:text-4xl font-semibold text-white">ALL COLLEGS</h1>
                </div>

           <div className="college-cards flex flex-row gap-7 lg:gap-5 flex-wrap justify-around mb-32 ">

              <Link to='/colleges/123'>
                <div className="card flex flex-col   rounded-xl shadow-sm shadow-slate-700 px-7 py-5 lg:p-2 items-center bg-[#6e48aa]">
                   
                   {/* COLLEGE-IMAGE */}
                   <div className="college-image">
                      <img src={College} alt="college" className='rounded-2xl border-4 border-solid border-white' />
                   </div>

                   {/* COLLEGE-INFO */}
                   <div className="college-info grow px-2 lg:py-5">
                      
                      <div className="header flex items-center justify-between border-b-[1px] border-white/10 pb-5">

                        <div className="collge-name">
                            <div className="text-whites font-semibold text-xl lg:text-2xl">The University Of Columbia</div>
                            <div className="text-base text-white"><HiOutlineMap className='inline mr-1'/> Torronto , Canada . Public</div>
                        </div>

                        <div className="hidden  text-white text-xl cursor-pointer font-semibold p-2 rounded-full border-1 border-black hover:bg-slate-700 hover:text-white"><HiOutlineBookmark/></div>

                      </div>

                      <div className="body flex flex-col  gap-7 lg:gap-10 items-center">

                          <div className="course-info flex flex-col mt-3 grow">
                             
                             <div className='flex list-none font-semibold gap-3 flex-col '>

                                <div className="flex flex-col gap-2">
                                     <li>
                                        <h3 className='text-white text-sm leading-5 inline-block mx-3'>Course Offered</h3>
                                        <p className='text-lg text-white inline-block '>3 Courses</p>
                                    </li>

                                </div>

                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-white text-sm leading-5 inline-block mx-3 '>1st Year Tution Fee</h3>
                                        <p className='text-lg text-white inline-block '>21 Lakhs</p>
                                    </li>
                                    
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-white text-sm leading-5 inline-block mx-3 '>Exam Accepted</h3>
                                        <p className='text-lg text-white inline-block '>TOEFL ,IELETS +1</p>
                                    </li>
                                    
                                </div>
                                
                                

                             </div>

                          </div> 

                          <div className="buttons flex flex-col gap-4 w-full">
                            <button className='py-2 rounded-full text-white bg-blue-400/40 tracking-wide font-semibold hover:bg-blue-400/80 active:scale-90 scale-100 transition-all'>Brochures</button>
                            <button className='py-2 rounded-full text-white bg-sky-400 tracking-wide font-semibold hover:bg-sky-700 active:scale-90 scale-100 transition-all'>Compare</button>
                          </div>                      
 
                      </div>

                   </div>


                </div>
                </Link>

                <Link to='/colleges/123'>
                <div className="card flex flex-col   rounded-xl shadow-sm shadow-slate-700 px-7 py-5 lg:p-2 items-center bg-[#6e48aa]">
                   
                   {/* COLLEGE-IMAGE */}
                   <div className="college-image">
                      <img src={College} alt="college" className='rounded-2xl border-4 border-solid border-white' />
                   </div>

                   {/* COLLEGE-INFO */}
                   <div className="college-info grow px-2 lg:py-5">
                      
                      <div className="header flex items-center justify-between border-b-[1px] border-white/10 pb-5">

                        <div className="collge-name">
                            <div className="text-whites font-semibold text-xl lg:text-2xl">The University Of Columbia</div>
                            <div className="text-base text-white"><HiOutlineMap className='inline mr-1'/> Torronto , Canada . Public</div>
                        </div>

                        <div className="hidden  text-white text-xl cursor-pointer font-semibold p-2 rounded-full border-1 border-black hover:bg-slate-700 hover:text-white"><HiOutlineBookmark/></div>

                      </div>

                      <div className="body flex flex-col  gap-7 lg:gap-10 items-center">

                          <div className="course-info flex flex-col mt-3 grow">
                             
                             <div className='flex list-none font-semibold gap-3 flex-col '>

                                <div className="flex flex-col gap-2">
                                     <li>
                                        <h3 className='text-white text-sm leading-5 inline-block mx-3'>Course Offered</h3>
                                        <p className='text-lg text-white inline-block '>3 Courses</p>
                                    </li>

                                </div>

                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-white text-sm leading-5 inline-block mx-3 '>1st Year Tution Fee</h3>
                                        <p className='text-lg text-white inline-block '>21 Lakhs</p>
                                    </li>
                                    
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-white text-sm leading-5 inline-block mx-3 '>Exam Accepted</h3>
                                        <p className='text-lg text-white inline-block '>TOEFL ,IELETS +1</p>
                                    </li>
                                    
                                </div>
                                
                                

                             </div>

                          </div> 

                          <div className="buttons flex flex-col gap-4 w-full">
                            <button className='py-2 rounded-full text-white bg-blue-400/40 tracking-wide font-semibold hover:bg-blue-400/80 active:scale-90 scale-100 transition-all'>Brochures</button>
                            <button className='py-2 rounded-full text-white bg-sky-400 tracking-wide font-semibold hover:bg-sky-700 active:scale-90 scale-100 transition-all'>Compare</button>
                          </div>                      
 
                      </div>

                   </div>


                </div>
                </Link>
                <Link to='/colleges/123'>
                <div className="card flex flex-col   rounded-xl shadow-sm shadow-slate-700 px-7 py-5 lg:p-2 items-center bg-[#6e48aa]">
                   
                   {/* COLLEGE-IMAGE */}
                   <div className="college-image">
                      <img src={College} alt="college" className='rounded-2xl border-4 border-solid border-white' />
                   </div>

                   {/* COLLEGE-INFO */}
                   <div className="college-info grow px-2 lg:py-5">
                      
                      <div className="header flex items-center justify-between border-b-[1px] border-white/10 pb-5">

                        <div className="collge-name">
                            <div className="text-whites font-semibold text-xl lg:text-2xl">The University Of Columbia</div>
                            <div className="text-base text-white"><HiOutlineMap className='inline mr-1'/> Torronto , Canada . Public</div>
                        </div>

                        <div className="hidden  text-white text-xl cursor-pointer font-semibold p-2 rounded-full border-1 border-black hover:bg-slate-700 hover:text-white"><HiOutlineBookmark/></div>

                      </div>

                      <div className="body flex flex-col  gap-7 lg:gap-10 items-center">

                          <div className="course-info flex flex-col mt-3 grow">
                             
                             <div className='flex list-none font-semibold gap-3 flex-col '>

                                <div className="flex flex-col gap-2">
                                     <li>
                                        <h3 className='text-white text-sm leading-5 inline-block mx-3'>Course Offered</h3>
                                        <p className='text-lg text-white inline-block '>3 Courses</p>
                                    </li>

                                </div>

                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-white text-sm leading-5 inline-block mx-3 '>1st Year Tution Fee</h3>
                                        <p className='text-lg text-white inline-block '>21 Lakhs</p>
                                    </li>
                                    
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-white text-sm leading-5 inline-block mx-3 '>Exam Accepted</h3>
                                        <p className='text-lg text-white inline-block '>TOEFL ,IELETS +1</p>
                                    </li>
                                    
                                </div>
                                
                                

                             </div>

                          </div> 

                          <div className="buttons flex flex-col gap-4 w-full">
                            <button className='py-2 rounded-full text-white bg-blue-400/40 tracking-wide font-semibold hover:bg-blue-400/80 active:scale-90 scale-100 transition-all'>Brochures</button>
                            <button className='py-2 rounded-full text-white bg-sky-400 tracking-wide font-semibold hover:bg-sky-700 active:scale-90 scale-100 transition-all'>Compare</button>
                          </div>                      
 
                      </div>

                   </div>


                </div>
                </Link>

                
            
                
                

                
             </div>

        </>
     );
}

export default Section5;