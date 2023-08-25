import Sucess from "../../../images/sec1.png"

function Section1() {
    return ( 
        <>
           <div>
                <div className="flex relative flex-col-reverse mt-20 md:mt-36 md:justify-between   md:p-5">

                    {/* TEXT-CONTENT */}
                    <div className="text-info my-10 relative z-10">
                         <p className="title text-yellow-500 font-semibold text-sm md:text-lg">#100MBBSDekho</p>
                         <h1 className="text-white font-sans font-bold text-3xl md:text-6xl tracking-wider leading-10">Start Your Journey <br/>To Abroad  With Us</h1>

                         <p className="text-lg text-slate-300 md:text-xl text-semibold max-w-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sequi corrupti odit iure, provident ipsa.</p>

                         <button className="bg-sky-500 text-white rounded-full px-7 py-3 mt-10 scale-100 active:scale-75 transition-all hover:bg-sky-700">Get Started</button>
                    </div>

                    {/* IMAGE */}

                    <div className="image-1 static md:absolute right-0 bottom-0 shrink">
                       <img src={Sucess} alt= "student"/>
                    </div>




                </div>
           </div>
        </>
     );
}

export default Section1;
