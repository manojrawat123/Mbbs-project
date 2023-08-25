import { useParams } from "react-router";
import Layout from "../../utils/Layout";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import { useEffect, useState } from "react";
import { GETAPI } from "../../API/api";

function SingleCollege() {

    const id= useParams().id
    const [college,setCollege]= useState(null)
    const [loading,setLoading]= useState(false)

    useEffect(()=> {

       
      const getColleges= async ()=>{
          
          setLoading(true)
          const { data }= await GETAPI(`colleges/${id}`);
          console.log(data)
          setCollege(data);
          setLoading(false)
  
      }
  
      getColleges();
    },[id])
    
    return ( 
        <>
          <Layout>
           <div className="Single-college-info mt-32">
             
             {/* SECTION1-COLLGE INTRO */}
              <Section1 college= {college} isLoading= {loading}/> 
              


             {/* COLLEGE-INFO VIDEO */}
             <Section2 college={college} isLoading= {loading}/>

             {/* COLLEGE-INFO TABS */}
             <Section3/>

             {/* FAQ */}
             <Section4/>

             {/* RELATED-COLLEGE */}
             <Section5/>

           </div>
          </Layout> 

        </>
     );
}

export default SingleCollege;