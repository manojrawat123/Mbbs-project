import React, { useEffect, useRef, useState } from "react";
import CollegeCard from "../../components/CollegeCard/CollegeCard";
import AccordionMenu from "../../components/Dropdown/Dropdown";
import Layout from "../../utils/Layout";
import { FaFilter } from 'react-icons/fa'
import { GETAPI } from "../../API/api";

const items = [
  { menu: ['TOEFL', 'PTE', 'NEET', 'SAT'], title: 'Exam Accepted',type: 'checkbox' },
  { menu: ['CANADA', 'USA', 'AUSTRALIA', 'UK'], title: 'Country',type: 'checkbox' },
  { menu: ['MAX 10 LAKH', 'MAX 20 LAKH', 'MAX 30 LAKH', 'MAX 40 LAKH'], title: 'Tution Fee',type: 'radio' },
  { menu: ['13 MONTHS', '24 MONTHS', '48 MONTHS'], title: 'Course Duration',type: 'radio' }
]

function College() {
  
  const childRef = useRef(null);

  const [filters, setFilters] = useState([]);
  const [colleges,setColleges] = useState(null);
  const [loading,setLoading]= useState(false)
  const getFilters = (checkedValues) => {
    const newFilters = [];

    for (const key in checkedValues) {
      checkedValues[key].forEach(val=> newFilters.push({ value:val,key: key }))
    }
 
    setFilters(newFilters);
  }

  const removeFilters= (val)=>{
      
    childRef.current.handleCheckboxChangeByParent(val)

  }

  const clearAllFilters= ()=>{

    childRef.current.removeAllFilters()

  }

  useEffect(()=> {

       
    const getColleges= async ()=>{

        setLoading(true)
        if(filters.length === 0)
        {
          const { data }= await GETAPI('colleges/');
          setColleges(data);
        }
        else
        {
            let filter_url= 'colleges/?';

            filters.forEach(item=>{
          switch(item.key)
          {
             case "Country":
             filter_url += `country=${item.value}&`
             
             break;

             case "Tution Fee":
             const split= item.value.split(" ");
             filter_url += `fee=${split.find(val=> Number.isInteger(+val))}&`
             break;
             
             case "Course Duration":
             const array= item.value.split(" ");
             filter_url += `course_duration=${array.find(val=> Number.isInteger(+val))}&`
             break;
             

             default:

          }
          

            })
        
            filter_url= filter_url.slice(0,filter_url.length-1)
            const { data }= await GETAPI(filter_url);
            setColleges(data);
        }
        setLoading(false)
        

    }

    getColleges();
  },[filters])

  return (
    <>
      <Layout>
        <div className="colleges-page mt-20">
          <div className="all-collges-info flex flex-col lg:flex-row gap-5">
            {/* FILTER-SECTION */}
            <div className="filter-section flex flex-col lg:w-[40%] bg-orange-500 py-10 px-5 rounded-md h-fit">
              <div className="filter-title border-b-[1px] border-white/30 pb-4">
                <div className="flex justify-between mb-5 font-semibold tracking-wide items-center">
                  <div className="text-white">
                    <FaFilter className="inline ml-2" /> All Filters
                  </div>
                  <div className="text-white cursor-pointer hover:text-black hover:bg-orange-500 rounded-full py-1 px-3" onClick={clearAllFilters}>Clear All</div>
                </div>
                <div className="all-filters-title flex flex-row gap-2 flex-wrap ">
                  {filters.map((filter, index) => (
                    <div key={index} className="border-1 rounded-full px-5 py-2 bg-white/20 text-white/70 flex gap-2">
                      <div className="title font-semibold">{filter.value}</div>
                      <div className="icon font-semibold cursor-pointer hover:scale-110 select-none" onClick={()=> removeFilters(filter.value)}>x</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="categorywise-checkboxes mt-10">
                <AccordionMenu items={items} getFilters={getFilters} ref={childRef}/>
              </div>
            </div>
            {/* COLLEGE-CARDS */}
            <div className="college-cards grow">
              <div className="found-result">
                <p className="text-lg text-slate-500 font-semibold">
                  <span className="text-yellow-600 text-xl font-bold mr-2">{colleges?.length}</span>
                  Results Found | All MBBS College Result
                </p>
              </div>
              <div className="college-details">
                <CollegeCard colleges={colleges} isLoading={loading}/>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default College;
