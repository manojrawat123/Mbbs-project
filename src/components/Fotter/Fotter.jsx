import React from 'react';
import logo from "../../images/img/europelogo.jfif"

const MyFooter = () => {
    return (
        <footer className="bg-black text-white">
            <div className="grid  md:grid-cols-4 grid-cols-1 gap-4 p-6">
                <div className="col-span-1 text-center">
                    <img src={logo} alt="Image" className="w-[10rem] h-16 mb-10 mx-auto" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet et libero nulla adipisci in ipsam, quas qui assumenda? Possimus qui quasi mollitia suscipit eius tempore quidem, ipsam unde sapiente ad.</p>
                    <br/>
                    <p>Some Content Here ... </p>
                <hr className='md:hidden mt-4'/>
                </div>
                <div className="col-span-1 text-center">
                    <h4 className="text-2xl font-semibold sm:mb-10 mb-5  ">Quick Links</h4>
                    <ul>
                        <li><a href="#" className='my-4'>Home</a></li>
                        <li><a href="#" className='my-4'>About us</a></li>
                        <li><a href="#" className='my-4'>Carrers</a></li>
                        <li><a href="#" className='my-4'>Refund Policy</a></li>
                        <li><a href="#" className='my-4'>Become a Patner</a></li>
                        <li><a href="#" className='my-4'>Blog</a></li>
                    </ul>
                <hr className='md:hidden mt-4'/>
                </div>
                <div className="col-span-1 text-center">
                    <h4 className="text-2xl font-semibold sm:mb-10 mb-5  ">MBBS Links</h4>
                    <ul>
                        <li><a href="#" className='my-4'>MBBS Admission in Russia</a></li>
                        <li><a href="#" className='my-4'>MBBS Admission in Ukraine</a></li>
                        <li><a href="#" className='my-4'>MBBS Admission in Georgia</a></li>
                        <li><a href="#" className='my-4'>MBBS Admission in Belarus</a></li>
                        <li><a href="#" className='my-4'>MBBS Admission in Kyrgyzstan</a></li>
                        <li><a href="#" className='my-4'>MBBS Admission in Kazakhstan</a></li>
                       
                    </ul>
                 <hr className='md:hidden mt-4'/>
                </div>
                <div className="col-span-1 text-center">
                    <h4 className="text-2xl font-semibold sm:mb-10 mb-5 ">Important Links</h4>
                    <ul>
                        <li><a href="#" className='my-4'>WDOMS </a></li>
                        <li><a href="#" className='my-4'>NMC </a></li>
                        <li><a href="#" className='my-4'>NEET </a></li>
                        <li><a href="#" className='my-4'>FMGE </a></li>
                        <li><a href="#" className='my-4'>ECTS </a></li>
                        <li><a href="#" className='my-4'>MBBS </a></li>
                    </ul>
                </div>
             <hr className='md:hidden mt-4'/>
            </div>
            <div className="bg-blue-800 p-3 text-center">
                &copy; 2023 MBBS Dekho. All rights reserved.
            </div>
        </footer>
    );
};

export default MyFooter;