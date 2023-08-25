import MySlider from "../../../components/Slider/Slider";

function Section4() {
    return ( 
        <>
          
             <div className="testimonials mt-32 ">
                     
                 {/* TITLE */}
                <div className="text-center">
                     <p className="text-white text-base">Review from students</p>
                     <h1 className="text-3xl md:text-4xl font-semibold text-blue-400">Testimonials</h1>
                </div>

                {/* SLIDER */}
                <div className="mt-20 mb-8">
                   <MySlider/>
                </div> 
                 

             </div>

        </>
     );
}

export default Section4;