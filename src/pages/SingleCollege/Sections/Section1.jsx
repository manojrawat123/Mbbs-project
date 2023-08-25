import { useState } from "react";
import {HiOutlineLocationMarker} from 'react-icons/hi'
import Loader2 from "../../../components/Loading/Loader2";
 
function Section1({college,isLoading}) {
    
    const [active,setActive]= useState(0);

    if(isLoading)
    return <Loader2/> 


    return ( 
        <>           
           <div className="section-1">
             
               <div className="section-container flex flex-col lg:flex-row gap-5">
                  
                {/* COLLEGE-IMAGE-SLIDER */}
                  <div className="flex flex-col gap-5">
                     
                     {/* colleg-big-image */}
                     <div className="flex relative h-[280px] md:h-[400px]">
                          
                        {college?.college_media.map((elem,index)=>(
                            <div  key={index} className={`absolute top-0 left-0 transition-all duration-200 h-full w-full ${active === index ? 'opacity-100':'opacity-0'}`}>
                             <img src={elem.image} alt={`college-img`} key={index} className="rounded-md h-full object-cover w-full"/>
                            </div> 
                         ))
                         }

                     </div>
                     {/* college-small-images */}
                     <div className="flex gap-5">
                         
                     {college && college?.college_media.map((elem,index)=>(
                            <div className=" w-[100px] rounded-sm relative cursor-pointer" onClick={()=> setActive(index)} key={index}>
                               <img src={elem.image} alt={`college-img`} key={index}  className="rounded-sm h-full object-cover"/>
                               <span className={`top-0 left-0 w-full h-full bg-slate-400/80 cursor-pointer ${active === index ? 'hidden':'absolute'}`}></span>

                            </div> 
                     ))}

                     </div>

                  </div>

                {/* COLLEGE-INFO */}


                  <div className="college-info">
                      
                      <div className="college-name">
                        <h1 className="text-white font-bold text-4xl md:text-5xl mb-2 lg:mb-4">{college?.college?.college_name}</h1>
                        <p className="text-slate-500 font-semibold text-base lg:text-lg tracking-wide"><HiOutlineLocationMarker className="inline align-baseline"/>{college?.college_address}</p>
                      </div>

                      <div className="college-intro mt-2 lg:mt-6">
                        
                        <p className="text-slate-500 text-xl lg:text-lg">
                        {college?.college_description}
                        </p>

                      </div>

                  </div>

               </div>

           </div>
        </>
     );
}

export default Section1;