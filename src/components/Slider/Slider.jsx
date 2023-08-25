import './Slider.css'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Stu from "../../images/stu1.jpg"

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <ul className="slider-dots">{dots}</ul>
    ),
  };

  function MySlider() {
    return (
      <Slider {...settings}>
        <div className='w-full md:w-2/3 rounded-3xl text-center px-2 md:px-24 py-10 bg-blue-800 text-white slides mx-auto'>
             
             <div className="image  flex justify-center">
                <img src={Stu} alt="student" className='rounded-full w-20 h-20 object-center border-8 border-white/10'/>
             </div>

             <p className='text-2xl font-bold mt-4 mb-2'>Tina Snow</p>
             <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, harum ipsum eveniet consequatur consequuntur quae, reprehenderit vero magni aut eum animi quisquam quidem quaerat ad dolorem quia saepe, amet blanditiis?
             </p>

        </div>

        <div className='w-full md:w-2/3 rounded-3xl text-center px-2 md:px-24 py-10 bg-blue-800 text-white slides mx-auto'>
             
             <div className="image  flex justify-center">
                <img src={Stu} alt="student" className='rounded-full w-20 h-20 object-center border-8 border-white/10'/>
             </div>

             <p className='text-2xl font-bold mt-4 mb-2'>Tina Snow</p>
             <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, harum ipsum eveniet consequatur consequuntur quae, reprehenderit vero magni aut eum animi quisquam quidem quaerat ad dolorem quia saepe, amet blanditiis?
             </p>

        </div>

        <div className='w-full md:w-2/3 rounded-3xl text-center px-2 md:px-24 py-10 bg-blue-800 text-white slides mx-auto'>
             
             <div className="image  flex justify-center">
                <img src={Stu} alt="student" className='rounded-full w-20 h-20 object-center border-8 border-white/10'/>
             </div>

             <p className='text-2xl font-bold mt-4 mb-2'>Tina Snow</p>
             <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, harum ipsum eveniet consequatur consequuntur quae, reprehenderit vero magni aut eum animi quisquam quidem quaerat ad dolorem quia saepe, amet blanditiis?
             </p>

        </div>
        
      </Slider>
    );
  }

  export default MySlider;