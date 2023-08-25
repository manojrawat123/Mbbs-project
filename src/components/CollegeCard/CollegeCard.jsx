import { Link } from 'react-router-dom';
import { HiOutlineMap, HiOutlineBookmark } from 'react-icons/hi2'
import LoadingCard from '../Loading/Loader1';


function CollegeCard({ colleges,isLoading }) {
    
    if (isLoading) {
        
        return (
          <div className="college-cards flex flex-row lg:flex-col gap-7 lg:gap-5 flex-wrap justify-around">
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </div>
        );
      }

    return (
        <>
            <div className="college-cards flex flex-row lg:flex-col gap-7 lg:gap-5 flex-wrap justify-around">

                {colleges && colleges.map((college,index)=> ( 
                <Link to={`/colleges/${college?.id}`} key={index} className='w-full md:w-[48%] lg:w-full'>
                    <div className="card flex flex-col lg:flex-row gap-6 rounded-xl shadow-sm shadow-slate-700 sm:px-7 sm:py-5 lg:p-2 items-center bg-[#6e48aa]">

                        {/* COLLEGE-IMAGE */}
                        <div className="college-image flex-1">
                            <img src={college?.college_media[0].image} alt="college" className='rounded-xl w-[230px] h-[150px] sm:w-[350px] sm:h-[250px] object-cover' />
                        </div>

                        {/* COLLEGE-INFO */}
                        <div className="college-info flex-[2] px-2 lg:py-5 sm:w-[85%] md:w-full">

                            <div className="header flex items-center justify-between border-b-[1px] border-white/10 pb-5">

                                <div className="collge-name">
                                    <div className="text-white font-semibold text-xl lg:text-2xl">{college?.college.college_name}</div>
                                    <div className="text-base text-slate"><HiOutlineMap className='inline mr-1' /> {college?.college_address} </div>
                                </div>

                                <div className="hidden lg:block text-slate text-xl cursor-pointer font-semibold p-2 rounded-full border-1 border-black hover:bg-slate-700 hover:text-white"><HiOutlineBookmark /></div>

                            </div>

                            <div className="body flex flex-col lg:flex-row gap-7 lg:gap-10 items-center">

                                <div className="course-info flex flex-col mt-3 grow">

                                    <div className='flex list-none font-semibold gap-3 flex-col lg:flex-row lg:gap-8 '>

                                        <div className="flex flex-col gap-2">
                                            <li>
                                                <h3 className='text-white text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Course Offered</h3>
                                                <p className='text-lg text-blue-500 inline-block lg:block'>{college?.college_course_offered} Courses</p>
                                            </li>

                                            <li className='hidden lg:block'>
                                                <h3 className='text-white text-sm leading-5'>12th Marks</h3>
                                                <p className='text-lg text-white'>Minimum {college?.college_required_twelth_marks}%</p>
                                            </li>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <li>
                                                <h3 className='text-white text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>1st Year Tution Fee</h3>
                                                <p className='text-lg text-white inline-block lg:block'>{college?.college_fee_total} Lakhs</p>
                                            </li>
                                            <li className='hidden lg:block'>
                                                <h3 className='text-white text-sm leading-5'>Scholarship</h3>
                                                <p className='text-lg text-white'>{college?.college_scholarship}</p>
                                            </li>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <li>
                                                <h3 className='text-white text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Exam Accepted</h3>
                                                <p className='text-lg text-white inline-block lg:block'>{college?.college_exam_accepted} +1</p>
                                            </li>
                                            <li className='hidden lg:block'>
                                                <h3 className='text-white text-sm leading-5'>Intake Session</h3>
                                                <p className='text-lg text-white'>{college?.college_intake_session}</p>
                                            </li>
                                        </div>



                                    </div>

                                </div>

                                <div className="buttons flex flex-col lg:hidden gap-4 w-full">
                                    <button className='py-2 rounded-full text-white bg-blue-400/40 tracking-wide font-semibold hover:bg-blue-400/80 active:scale-90 scale-100 transition-all'>Brochures</button>
                                    <button className='py-2 rounded-full text-white bg-sky-400 tracking-wide font-semibold hover:bg-sky-700 active:scale-90 scale-100 transition-all'>Compare</button>
                                </div>

                            </div>

                        </div>


                    </div>
                </Link>
                ))}






            </div>

        </>
    );
}

export default CollegeCard;