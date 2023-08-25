import {HiOutlineMail,HiOutlineEye,HiEyeOff} from 'react-icons/hi'
import Layout from '../../utils/Layout';
import {Link} from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Logo from '../../images/logo.png'
import { POSTAPI } from '../../API/api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux';


function Login() {

    
   const [isPasswordVisible,setIsPasswordVisible]= useState(false)
   const dispatch= useDispatch()

   const loginUser =  (values) => {
    
      POSTAPI('token', values).then( ( {data} )=> {
        dispatch(setUser(data.access))  
      })
     
  };
  

   const formik= useFormik({
     
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
       
      email: Yup.string().email("Invalid Email").required("Email Required"),
      password: Yup.string().required("Password Required")

    }),
    onSubmit: async (values,{resetForm}) => {
      console.log("Form submitted");
      loginUser(values);
      resetForm();
      
    }
  

  }) 

    return ( 
        <>

          <Layout>
           
           <div className="login-form ">
               
               <div className="flex h-[95vh] justify-center items-center">

                    <div className="form bg-[#6e48aa] rounded-xl px-4 pt-10 pb-20 md:px-20 md:pt-16 md:pb-32  md:w-[70%] lg:w-[40%] w-full">
                       <div className="title text-center text-white font-semibold mb-16 text-3xl md:text-5xl">
                          <img src={Logo} alt='logo'/>
                       </div>

                       <form onSubmit={formik.handleSubmit}>
                          <div className="flex items-center border-b-2 caret-white relative justify-between transition-all group">
                            <input 
                              type="email" 
                              name='email'  
                              id='email' 
                              className='bg-transparent focus:outline-none focus:border-none grow text-white pb-1' 
                              autoComplete='off'
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              value={formik.values.email}
                              />
                            <HiOutlineMail className='text-white text-xl'/>
                            <label htmlFor='email' 
                            className={`absolute left-0 text-white/80 ${formik.values.email ? 'scale-90 -translate-y-6':'scale-75 translate-y-0'} group-focus-within:scale-90 group-focus-within:-translate-y-6 transition-all duration-300`}>Email</label> 
                          </div>
                          
                          { 
                            formik.touched.email 
                            && 
                            formik.errors.email 
                            &&
                            <p className='text-sm md:text-base text-red-500'>{formik.errors.email}</p>  
                          }

                          <div className="flex items-center mt-10 border-b-2 caret-white relative justify-between transition-all group">
                            <input 
                              type={`${isPasswordVisible? 'text':'password'}`} 
                              name='password'  
                              id='password' 
                              className='bg-transparent focus:outline-none focus:border-none grow text-white pb-1' 
                              autoComplete='off'
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              value={formik.values.password}
                              />

                            { isPasswordVisible ?
                             <HiEyeOff className='text-white text-xl cursor-pointer' onClick={()=> setIsPasswordVisible(false)}/>
                             :
                             <HiOutlineEye className='text-white text-xl cursor-pointer' onClick={()=> setIsPasswordVisible(true)}/> }
                            <label htmlFor='password' className={`absolute left-0 text-white/80 ${formik.values.password ? 'scale-90 -translate-y-6':'scale-75 translate-y-0'} group-focus-within:scale-90 group-focus-within:-translate-y-6 transition-all duration-300`}>Password</label> 
                          </div>
                          
                          {
                            formik.touched.password
                            &&
                            formik.errors.password
                            &&
                            <p className='text-sm md:text-base text-red-500'>{formik.errors.password}</p>
                          }

                          <div className='mt-2'>
                            <input type='checkbox' className='h-4 w-4 align-baseline'/> <span className='text-white'>Remember Password</span>
                          </div>

                          <div className="btn mt-14">
                            <button type='submit' className='bg-sky-500 text-center py-2 text-white w-full rounded-full font-semibold'>Login</button>
                          </div>

                          <div className='mt-10'>
                            <p className='text-white text-center md:text-base text-sm'>Dont have account <Link to='/register'><span className=' cursor-pointer hover:font-semibold hover:underline'>Register</span></Link></p>
                          </div>



                       </form>

                    </div>

               </div>

           </div>
         </Layout>    

        </>
     );
}

export default Login;