import Layout from "../../utils/Layout";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";


function Home() {
    return ( 
        <>
          <Layout>
             
                <div className="home-app">

                  <Section1/>
                  <Section2/>
                  <Section3/>
                  <Section4/>
                  <Section5/>
                  <Section6/>

                </div>        
                

          </Layout>
        </>
     );
}

export default Home;