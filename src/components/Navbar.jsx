import { useEffect, useState } from "react";
import {HiOutlineHome,HiOutlineUser,HiOutlineMagnifyingGlass,HiOutlinePhone} from "react-icons/hi2"
import { useLocation, useNavigate } from "react-router";

const menu= [
    {value: 'Home', icon: <HiOutlineHome/>,url: '/', path: ['/']},
    {value: 'User', icon: <HiOutlineUser/>,url: '/login', path: ['/login','/dashboard','/register']},
    {value: 'Search', icon: <HiOutlineMagnifyingGlass/>,url: '/colleges',path: ['/colleges']},
    {value: 'Contact', icon: <HiOutlinePhone/>,url: '/contact',path: ['/contact']}
]


function Navbar() {

    const navigate= useNavigate();
    
    
    const pathname = useLocation().pathname
    
    const [active,setActive]= useState('Home')

    useEffect(()=>{
       
        setActive(menu.find(item=> item.path.includes(pathname))?.value ?? 'Home')

    },[pathname])
    const clickHandler= (item)=>{
       
        setActive(item.value)
        navigate(item.url)
    }

    return ( 
        <>
            <div className="fixed bottom-0 flex justify-center w-full">
               
                  {/* NAVBAR   */}
                  <div className="icons flex items-end py-2 px-6 gap-4 mb-5 md:gap-10 md:mb-10 bg-black bg-opacity-30 md:px-14 md:py-4 rounded-full">
                       
                       {menu.map((item,key)=> (
                            
                            <button key={key} className={`text-2xl text-white cursor-pointer p-2 rounded-full md:text-3xl ${active === item.value ? "bg-sky-500 text-black": ""}`} onClick={()=> clickHandler(item)}>{item.icon}</button>
                           
                       ))}


                  </div>

            </div>
        </>
     );
}

export default Navbar;

