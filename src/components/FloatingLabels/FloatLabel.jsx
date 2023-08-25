import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GETAPI } from "../../API/api";
import { useLocation, useNavigate } from "react-router";

const labels= [
    {msg: "Please Compete Your Profile", key: "is_profile_complete",url: "/complete-profile"},
    {msg: "Please Verify Your Email", key: "is_email_verified",url: null}

]

function FloatLabels() {

    const navigate= useNavigate();
    const location= useLocation();

    const id = useSelector(({reducer}) => reducer.user);
    const [status,setStatus]= useState({"is_email_verified": true, "is_profile_complete": true})


    useEffect(() => {
        const fetchData = async () => {
            const {data} = await GETAPI(`accounts/${id}/`);
            if (data) {
                setStatus({
                    "is_email_verified": data.is_email_verified,
                    "is_profile_complete": data.is_profile_complete
                })
            }
        };

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location]);
    
    if(!id)
    return null;

    return ( 
        <>
           
           <div className="fixed px-2 top-0 right-0 flex-col flex gap-1 w-full z-50">
              
              {
                labels.map((item,key)=> !status[item.key] && (
                    <div className="text-sm md:text-base rounded-md bg-red-700/30 text-white px-5 py-2" key={key} onClick={()=> item.url ? navigate(`${item.url}`):null }>
                        {item.msg}
                    </div>    
                ))
              }

           </div> 


        </>
     );
}

export default FloatLabels;