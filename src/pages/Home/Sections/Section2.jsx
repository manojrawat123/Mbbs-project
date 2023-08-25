import Stu1 from "../../../images/stu1.jpg"
import Stu2 from "../../../images/stu2.jpg"
import {HiOutlineDocumentCheck} from "react-icons/hi2"

function Section2() {
    return ( 
        <>
            <div className="flex relative mt-36 justify-center lg:justify-between flex-col lg:flex-row gap-4 md:gap-8">

                {/* IMAGE SIDE */}

                <div className="images h-[350px] flex justify-center flex-none">
                     
                     <div className="img1">
                        <img src={Stu1} alt="img1" className="rounded-md rotate-12 h-[350px]"/>
                     </div>
                     <div className="img2 absolute flex justify-center -z-10 ">
                        <img src={Stu2} alt="img2"  className="h-[350px] rounded-md object-cover"/>
                     </div>
                </div>

                {/* TEXT SIDE */}

                <div className="text">

                      <div className="cards flex flex-col lg:flex-row justify-evenly gap-5">

                        <div className="bg-blue-900 flex flex-col gap-3 justify-center p-4 rounded-md items-center px-8">

                            <div className="icon text-5xl lg:text-3xl text-white "><HiOutlineDocumentCheck/></div>
                            <div className="title text-white text-2xl md:text-xl font-semibold">Application</div>
                            <div className="number text-slate-400 font-semibold text-sm md:text-lg">1000+</div>

                        </div>

                        <div className="bg-blue-900 flex flex-col gap-3 justify-center p-4 rounded-md items-center px-8">

                            <div className="icon text-5xl lg:text-3xl text-white "><HiOutlineDocumentCheck/></div>
                            <div className="title text-white text-2xl md:text-xl font-semibold">Application</div>
                            <div className="number text-slate-400 font-semibold text-sm md:text-lg">1000+</div>

                        </div>

                        <div className="bg-blue-900 flex flex-col gap-3 justify-center p-4 rounded-md items-center px-8">

                            <div className="icon text-5xl lg:text-3xl text-white "><HiOutlineDocumentCheck/></div>
                            <div className="title text-white text-2xl md:text-xl font-semibold">Application</div>
                            <div className="number text-slate-400 font-semibold text-sm md:text-lg">1000+</div>

                        </div>

                        <div className="bg-blue-900 flex flex-col gap-3 justify-center p-4 rounded-md items-center px-8">

                            <div className="icon text-5xl lg:text-3xl text-white "><HiOutlineDocumentCheck/></div>
                            <div className="title text-white text-2xl md:text-xl font-semibold">Application</div>
                            <div className="number text-slate-400 font-semibold text-sm md:text-lg">1000+</div>

                        </div>


                      </div> 
                      
                      <div className="w-full md:w-2/3 text-slate-600 font-semibold leading-6 mt-10 text-xl md:text-lg text-center lg:text-left mx-auto lg:mx-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Dicta ipsa sunt excepturi iste porro,Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque eius unde voluptatem, deleniti in perspiciatis soluta repellat necessitatibus, itaque, quibusdam ad fugiat repellendus libero dolor qui eum. Nam, rerum!
                        <br/>  
                        <button className="bg-sky-500 text-white rounded-full px-7 py-3 mt-10 scale-100 active:scale-75 transition-all hover:bg-sky-700 relative z-1">Lets Talk</button>

                        
                      </div>
                          
                    

                </div>
               

            </div>

        </>
     );
}

export default Section2;