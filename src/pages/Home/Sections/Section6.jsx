import AccordionItem from "../../../components/Accordion/Accordion";
import Faq from "../../../images/faq.png"

function Section6() {
    return ( 
        <>
           <div className="faq-section mt-32">
                
                <div className="flex flex-col-reverse items-center md:flex-row">

                <div className="accordion-container grow">
                    <AccordionItem title="Best Cost for Abroad ?" content="Content for section 1." />
                    <AccordionItem title="Which is the Best University ?" content="Content for section 2." />
                    <AccordionItem title="What will be the Procedure ?" content="Content for section 3." />
                </div>

                <div className="faq-image">
                    <img src={Faq} alt="faq" />
                </div>


                </div>

           </div>
        </>
     );
}

export default Section6;