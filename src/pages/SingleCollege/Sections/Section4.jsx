import AccordionItem from "../../../components/Accordion/Accordion";

function Section4() {
    return ( 
        <>
           <div className="faq mt-20 px-3 md:px-6">
                    
                <div className="text-center mb-10">
                     <p className="text-white text-base">FAQ</p>
                     <h1 className="text-3xl md:text-4xl font-semibold text-blue-400">Services</h1>
                </div>

                   
    
                    <AccordionItem title="Best Cost for Abroad ?" content="Content for section 1." />
                    <AccordionItem title="Which is the Best University ?" content="Content for section 2." />
                    <AccordionItem title="What will be the Procedure ?" content="Content for section 3." />

           </div>
        </>
     );
}

export default Section4;