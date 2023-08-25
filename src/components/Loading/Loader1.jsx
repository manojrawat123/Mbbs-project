function LoadingCard() {
    return (
      <>

      
      {/* <!-- CARD --> */}
      <div className='w-full md:w-[48%] lg:w-full'>

            
          <div className="card flex flex-col lg:flex-row gap-6 rounded-xl shadow-sm shadow-slate-700 sm:px-7 sm:py-5 lg:p-2 items-center">
  
              {/* <!-- COLLEGE-IMAGE --> */}
                  <div className="college-image flex-1">
                      <div className='rounded-xl w-[230px] h-[150px] sm:w-[350px] sm:h-[250px] bg-gray-400 animate-pulse'></div>
                  </div>

              {/* <!-- COLLEGE-INFO     --> */}
                  <div className="college-info flex-[2] px-2 lg:py-5 sm:w-[85%] md:w-full">

                        {/* <!-- HEADER --> */}
                        <div className="header flex items-center justify-center lg:justify-start border-b-[1px] border-white/10 pb-5">

                                <div className="collge-name">

                                    <div className="bg-gray-400 w-[180px] h-[10px] sm:w-[300px] sm:h-[20px] rounded-2xl animate-pulse"></div>
                                    <div className="w-5/12 rounded-md h-1.5 md:h-2.5 bg-gray-400 my-2 animate-pulse"></div>

                                </div>

                        </div>

                        {/* <!-- BODY --> */}
                        <div className="body flex flex-col lg:flex-row gap-7 lg:gap-10 items-center">
                                  
                              <div className="course-info flex flex-col mt-3 grow"> 
                                    
                                    {/* <!-- CONTENT --> */}
                                    <div className='flex list-none font-semibold gap-3 flex-col lg:flex-row lg:gap-8 flex-wrap'>

                                                <div className="flex flex-col gap-2">
                                                    <li>
                                                          <div className='bg-gray-400 w-48 h-3 rounded-md animate-pulse'></div>
                                                          
                                                    </li>

                                                    <li className='hidden lg:block'>
                                                          <div className='bg-gray-400 w-40 h-2 rounded-md animate-pulse'></div>
                                                     </li>
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <li>
                                                          <div className='bg-gray-400 w-48 h-3 rounded-md animate-pulse'></div>
                                                    </li>

                                                    <li className='hidden lg:block'>
                                                          <div className='bg-gray-400 w-40 h-2 rounded-md animate-pulse'></div>
                                                     </li>
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <li>
                                                          <div className='bg-gray-400 w-48 h-3 rounded-md animate-pulse'></div>
                                                    </li>

                                                    <li className='hidden lg:block'>
                                                          <div className='bg-gray-400 w-40 h-2 rounded-md animate-pulse'></div>
                                                     </li>
                                                </div>

                                                <div className="lg:flex flex-col gap-2 hidden ">
                                                    <li>
                                                          <div className='bg-gray-400 w-48 h-3 rounded-md animate-pulse'></div>
                                                    </li>

                                                    <li className='hidden lg:block'>
                                                          <div className='bg-gray-400 w-40 h-2 rounded-md animate-pulse'></div>
                                                     </li>
                                                </div>

                                                
                                    </div>  
      
                              </div>   

                        </div>

                  </div>  


          </div> 
      </div>  

     
</>
    );
  }

export default LoadingCard;  