import { useState } from 'react';
import {BiImageAdd} from 'react-icons/bi'
import {BsFillFileImageFill} from 'react-icons/bs'
import {IoIosClose} from 'react-icons/io'


function ImageForm({question,object,keyName,setFormValue,allFormValues}) {

    const [image,setImage]= useState(null)
    

   

    const changeHandler= (event)=> {

        if(event.target.files[0])
        setImage(event.target.files[0])

        else
        setImage(null)

        setFormValue(object,keyName,event.target.files[0])
    }

    return ( 
        <>
             <div className="image-form">
                 
                <div className="form-questions mb-4">
                    <p className="text-white font-semibold text-xl md:text-3xl tracking-wide leading-7">{question}</p>
                </div>

                <div className="image-field">
                   <label htmlFor="image" className='w-full border-dashed border-2 border-sky-500 cursor-pointer block py-5 relative'>
                     {
                        allFormValues[object][keyName] ?
                        <BsFillFileImageFill className='text-sky-500 text-5xl mx-auto w-28' />
                        :
                        <BiImageAdd className='text-sky-500 text-5xl mx-auto'/>
                     }

                     {allFormValues[object][keyName] &&
                     <IoIosClose 
                     className='text-sky-500 z-10 text-2xl  absolute right-3 top-1 transition-all hover:scale-125 cursor-pointer'
                     onClick={(event)=> {
                        setImage(null)
                        setFormValue(object,keyName,null)
                        event.stopPropagation()
                        event.preventDefault()
                    }}
                    
                    /> 
                  }
                   </label>
                   <input type="file" className="hidden" id='image' onChange={changeHandler}/>
                </div>
                   
             </div>      
        </>
     );
}

export default ImageForm;