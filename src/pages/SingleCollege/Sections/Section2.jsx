import { useState } from "react";
import {HiPlay} from "react-icons/hi2"
import {CgClose} from 'react-icons/cg'
import Loader3 from "../../../components/Loading/Loader3";

function Section2({college,isLoading}) {

    const [youtube,setYoutube]= useState(false);

    if(isLoading)
    return <Loader3/>

    return ( 
        <>
           <div className="collge-video-intro mt-20">
                
                <div className="college-video aspect-video relative">
                    <img src={college?.college_media[0]?.image} alt='professor' className="object-cover w-full"/>
                    <div className="wrapper absolute top-0 left-0 w-full h-full flex items-center justify-center bg-blue-700/30">
                        <div className="icon cursor-pointer rounded-full absolute bg-sky-600/30 scale-150 animate-ping flex items-center justify-center p-8">
                        </div>
                        <div className="icon cursor-pointer rounded-full absolute bg-sky-600/80 scale-125 md:scale-[2] animate-ping flex items-center justify-center p-8">
                        </div>
                        <div className="icon cursor-pointer rounded-full absolute bg-sky-600 animate-pulse flex items-center justify-center p-5 md:p-8" onClick={()=> setYoutube(true)}>
                            <HiPlay className="text-white text-4xl cursor-pointer "/>
                        </div>
                    </div>
                </div>

                {youtube && 
                <div className="youtube-video-player fixed top-0 left-0 z-20 w-screen h-screen bg-black/80 flex items-center">
                    
                    <div className="h-[80%] w-[95%]  md:w-[90%] mx-auto md:px-0">

                        <div className="close-icon fixed right-4 md:right-7 top-6" onClick={()=> setYoutube(false)}>
                            <CgClose className="text-white/80 transition-all hover:scale-125 hover:text-white cursor-pointer text-right text-xl"/>
                        </div>

                        <div className="flex items-center justify-center h-full md:w-auto ">
                             
                        <iframe className="w-full h-[65%] md:h-full" src={college?.college_yt_video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        </div>

                    </div>
                   
                </div>
                }

           </div>
        </>
     );
}

export default Section2;