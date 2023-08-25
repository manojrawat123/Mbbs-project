import { useState } from "react";


function Section3() {

    const tabContent= [
        'Courses ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet nisi temporibus atque voluptatum ab eum aut dolorem eaque hic. Voluptas adipisci iste odio error doloribus magni sed illo at?Courses ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet nisi temporibus atque voluptatum ab eum aut dolorem eaque hic. Voluptas adipisci iste odio error doloribus magni sed illo at?',
        'Admissions ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet nisi temporibus atque voluptatum ab eum aut dolorem eaque hic. Voluptas adipisci iste odio error doloribus magni sed illo at?Courses ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet nisi temporibus atque voluptatum ab eum aut dolorem eaque hic. Voluptas adipisci iste odio error doloribus magni sed illo at?',
        'Fees ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet nisi temporibus atque voluptatum ab eum aut dolorem eaque hic. Voluptas adipisci iste odio error doloribus magni sed illo at?Courses ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet nisi temporibus atque voluptatum ab eum aut dolorem eaque hic. Voluptas adipisci iste odio error doloribus magni sed illo at?',
        'Ranking ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet nisi temporibus atque voluptatum ab eum aut dolorem eaque hic. Voluptas adipisci iste odio error doloribus magni sed illo at?Courses ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet nisi temporibus atque voluptatum ab eum aut dolorem eaque hic. Voluptas adipisci iste odio error doloribus magni sed illo at?',

    ]
    const [activeTab,setActiveTab]= useState(0)
    const tabs= ['Courses','Admissions','Fees','Ranking']

    return ( 
        <>
            <div className="college-infotabs mt-5">
                
                <div className="all-tabs bg-[#6e48aa] rounded-xl px-4 py-2 md:px-8 md:py-5">

                    <div className="tabs flex">

                        {
                            tabs.map((tab,index)=> (
                                <div key={index} className={`text-white text-base cursor-pointer md:text-lg ${activeTab===index && 'border-b-4 border-b-white/25 pb-1 font-semibold bg-white/10' }  px-4 py-2 select-none`} onClick={()=> setActiveTab(index)} >{tab}</div>
                            ))
                        }
                        

                    </div>

                    <div className="tab-content">

                        {tabContent.map((content,index)=> (
                            <div key={index} className={`tabcontent text-white/95 tracking-wide pt-4 pb-14   ${activeTab===index ? 'block' : 'hidden'}`}>
                              {content}
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </>
     );
}

export default Section3;