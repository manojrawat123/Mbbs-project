import useMultiForm from "../../components/Forms/useMultiForm";
import {FaArrowRight} from "react-icons/fa"
import TabForm from "../../components/Forms/tabForm";
import MenuForm from "../../components/Forms/menuForm";
import TextForm from "../../components/Forms/textForm";
import Logo from '../../images/white-logo.png'
import ImageForm from "../../components/Forms/imageForm";
import { useState } from "react";
import { POSTAPI, PUTAPI } from "../../API/api";
import { useNavigate } from "react-router";

function Register() {

    const navigate= useNavigate();
    const [formVal,setFormVal]= useState(
        {
            user: {
                "first_name": "",
                "last_name": "",
                "username": "",
                "password": "",
                "confirm_password":"",
                "email": ""
            },
            user_profile: {
                "user_address": "",
                "user_phone": null,
                "user_converted": false,
                "user_father_name": "",
                "user_dob": null,
                "user_budget": "10",
                "user_college_preference": "India",
                "user_profile_image": null,
                
            },
            user_test_info: {
                "user_test_type": 'NEET',
                "user_test_score": null,
                "user_test_date": null,
                "user_test_exp_date": null,
                "user_test_document_image": null,
                "user_neet_test_status": null
            }
        }
    )
    const formValueHandler= (object,keyName,value)=> {
        setFormVal({ 

            ...formVal,
            [object]: { 
                ...formVal[object],
                [keyName]: value
                
            },
            })

    }

    const nextHandler=()=>{

        isLastForm ?  submitHandler() : next(formVal)
    }

    //Type: text || minlengththree || email || imgfile || phone || date || number
    const allForms=
    [
        {component:<TextForm question="What is Your Email ?" onEnter={nextHandler} placeholder='Email' type='email' object='user' keyName= 'email' setFormValue= {formValueHandler}  allFormValues= {formVal}/>
        ,key:'user',nestedKey:'email',type:'email'
        },
        {component:<TextForm question="Enter Your Password ?" onEnter={nextHandler} placeholder='Password' type='password' object='user' keyName='password' setFormValue= {formValueHandler}  allFormValues= {formVal}/>
        ,key:'user',nestedKey:'password',type:'minlengththree'
        },
        {component:<TextForm question="Confirm Password ?" onEnter={nextHandler} placeholder='Confirm Password' type='password' object='user' keyName='confirm_password' setFormValue= {formValueHandler}  allFormValues= {formVal}/>
        ,key:'user',nestedKey:'confirm_password',type:'confirm_password'
        },

        
        {component:<TextForm onEnter={nextHandler} question="First Name " placeholder='First Name' type= 'text' object='user' keyName='first_name' setFormValue= {formValueHandler}  allFormValues= {formVal}/>
         ,key:'user',nestedKey:'first_name',type:'text' 
        },
        {component:<TextForm onEnter={nextHandler} question="Last Name " placeholder='Last Name' type= 'text'  object='user' keyName='last_name' setFormValue= {formValueHandler}  allFormValues= {formVal}/>
        ,key:'user',nestedKey:'last_name',type:'text'
        },


        {component:<ImageForm onEnter={nextHandler}  question= "Upload Profile Image" keyName='user_profile_image' object='user_profile' setFormValue= {formValueHandler}  allFormValues= {formVal}/>
        ,key:'user_profile',nestedKey:'user_profile_image',type:'imgfile'
        },
        {component:<TextForm onEnter={nextHandler} question="Your Address " placeholder='Address...' type= 'text' object='user_profile' keyName= 'user_address' setFormValue= {formValueHandler}  allFormValues= {formVal}/>
        ,key:'user_profile',nestedKey:'user_address',type:'text'
        },
        {component:<TextForm onEnter={nextHandler} question="Contact Number" placeholder='Mobile Number' type= 'tel' object='user_profile' keyName= 'user_phone' setFormValue= {formValueHandler}  allFormValues= {formVal}/>
        ,key:'user_profile',nestedKey:'user_phone',type:'phone'
        },
        {component:<TextForm onEnter={nextHandler} question="Fathers Name" placeholder='Fathers Name' type= 'text' object='user_profile' keyName= 'user_father_name' setFormValue= {formValueHandler}  allFormValues= {formVal}/>
        ,key:'user_profile',nestedKey:'user_father_name',type:'text'
        },
        {component:<TextForm onEnter={nextHandler} question='Date Of Birth' placeholder='DD/MM/YYYY' type=' text' object='user_profile' keyName= 'user_dob' setFormValue= {formValueHandler}  allFormValues= {formVal}/>
        ,key:'user_profile',nestedKey:'user_dob',type:'date'
        },
        
        {component:<MenuForm question="Estimated Budget ?" options={['Max 10 Lakh','Max 20 Lakh','Max 30 Lakh','Max 40 Lakh','50 Lakh+']} object='user_profile' keyName='user_budget' setFormValue= {formValueHandler}  allFormValues= {formVal}/>
        ,key:'user_profile',nestedKey:'user_budget',type:'text'
        },
        {component:<MenuForm question="Preferance Country ?" options={["India","USA","UK","Australia","France","Germany"]} object='user_profile' keyName= 'user_college_preference' setFormValue= {formValueHandler}  allFormValues= {formVal}/> 
        ,key:'user_profile',nestedKey:'user_college_preference',type:'text'
        },

        
        {component:<TabForm onEnter={nextHandler} question="Are You Neet Qualified ?" options={["Yes","No"]} setFormValue= {formValueHandler}  allFormValues= {formVal} object='user_test_info' keyName= 'user_neet_test_status'/>
        ,key:'user_test_info',nestedKey:'user_neet_test_status',type:'text'
        },
        {component:<TabForm onEnter={nextHandler} question="Year of NEET examination ?" options={['2021','2022','2023']} object='user_test_info' keyName= 'user_test_date' setFormValue= {formValueHandler}  allFormValues= {formVal}/>
        ,key:'user_test_info',nestedKey:'user_test_date',type:'text'
        },
        {component:<TextForm onEnter={nextHandler} question="NEET Score" placeholder='Total Marks' type='number' object='user_test_info' keyName= 'user_test_score' setFormValue= {formValueHandler}  allFormValues= {formVal}/>
        ,key:'user_test_info',nestedKey:'user_test_score',type:'number'
        }, 
        {component:<ImageForm onEnter={nextHandler}  question='NEET SCORE CARD' object='user_test_info' keyName='user_test_document_image' setFormValue= {formValueHandler}  allFormValues= {formVal}/>
        ,key:'user_test_info',nestedKey:'user_test_document_image',type:'imgfile'
        },        
        
        
    ]

    const {currentForm,currentFormIndex,next,back,isFirstForm,isLastForm,error}= useMultiForm(allForms);


    const callApi= async (updatedFormVal)=> {
        
        delete updatedFormVal.user.email
        console.log(updatedFormVal)
       
        const userFormData = new FormData();
        const userProfileFormData = new FormData();
        const userTestInfoFormData = new FormData();
         
        for (const key in updatedFormVal.user) {
            userFormData.append(`${key}`,JSON.stringify(updatedFormVal.user[key]));
        }

        for (const key in updatedFormVal.user_profile) {
            if(key === 'user_profile_image')
            userProfileFormData.append(`${key}`,updatedFormVal.user_profile[key]);
            else
            userProfileFormData.append(`${key}`,JSON.stringify(updatedFormVal.user_profile[key]));
        }  
          
        for (const key in updatedFormVal.user_test_info) {
           userTestInfoFormData.append(`${key}`, updatedFormVal.user_test_info[key]);
        }

        const formData = new FormData();
        formData.append('user', userFormData);
        formData.append('user_profile', userProfileFormData);
        formData.append('user_test_info', userTestInfoFormData);


        const newForm= new FormData()
        const obj= {}
        for(const k1 in updatedFormVal)
        {
            for(const k2 in updatedFormVal[k1])
            {
                newForm.append(`${k1}.${k2}` ,updatedFormVal[k1][k2])
            }
        }


        
       try
       {
        
        //const{ data } =await POSTAPI('users/',JSON.stringify(updatedFormVal.user))
        const { data }= await PUTAPI(`accounts/${sessionStorage.getItem('saved_user_id')}/`,newForm)
        sessionStorage.clear()

       }
       catch(error)
       {
          console.log(error)
       }

    }

    const modifyDate= (date)=>{

        const modifiedDate= date.split('/')
        return modifiedDate.reverse().join('-')
        
    }

   const submitHandler= ()=>{
    
    
    //MODIFYING FORM FIELD VALUES
    const updatedFormVal = {
        ...formVal,
        user: {
          ...formVal.user,
          username: formVal.user.email.split('@')[0]
        },
        user_profile: {
          ...formVal.user_profile,
          user_budget: formVal.user_profile.user_budget.split(' ').find(val => !isNaN(val)),
          user_dob: modifyDate(formVal.user_profile.user_dob)
        },
        user_test_info: {
          ...formVal.user_test_info,
          user_test_date: modifyDate(new Date(formVal.user_test_info.user_test_date).toLocaleDateString()),
            user_test_exp_date: modifyDate(new Date(new Date(`${+formVal.user_test_info.user_test_date + 3}`)).toLocaleDateString())
        }
      };
    
      // Call the API or perform any other necessary actions
      callApi(updatedFormVal)
      navigate('/success')


   }

   

    return ( 
        <>
            <div className="w-full h-screen bg-black/80 flex justify-center items-center">
                
                <div className="question-forms md:w-auto w-full">

                    <div className="title mb-10 md:mb-16 w-full md:w-[75%] mx-auto">
                          <img src={Logo} alt='logo' className="w-[35%] md:w-[40%] lg:w-[45%] mx-auto"/>
                    </div>

                    <div className="form relative bg-slate-500/30 pt-14 pb-10 px-8 md:pt-24 md:pb-14 md:px-10 rounded-md mx-auto max-w-lg">
                        
                        {/* ACTIVE-FORM-TAB */}
                        <span className="bg-sky-500 text-white text-sm absolute right-3 md:right-4 top-2 rounded-full px-3 py-1">{currentFormIndex+1}/{allForms.length}</span>

                        {currentForm.component}
                        
                        {error && 
                        <p className="text-red-500 text-sm md:text-base">  {error} </p>}
                        <div className="buttons flex justify-end gap-5 md:gap-10 items-baseline mt-4">


                        {!isFirstForm && <button type="button" className="bg-sky-500 text-white font-semibold rounded-full px-7 py-1 md:px-10 md:py-2 mt-10 scale-100 active:scale-75 transition-all hover:bg-sky-700"
                        onClick={()=> back()}>Back</button>}
                        <button type="button" className="text-white/60 hover:text-white text-base  md:text-lg group font-semibold transition-all ease-linear"
                        onClick={()=> { isLastForm ?  submitHandler() : next(formVal)}}>
                            {isLastForm ? "Finish":"Next"} <FaArrowRight className="text-white text-xl -translate-x-[100%] opacity-0 group-hover:opacity-100 inline  group-hover:translate-x-0 transition-all ease-linear"/>
                        </button> 

                        </div>

                     </div>
                    

                </div>

            </div>
        </>
     );
}

export default Register;