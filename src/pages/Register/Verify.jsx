import { Link, useParams } from "react-router-dom";
import Layout from "../../utils/Layout";
import email from '../../utils/email.json'
import Lottie from "lottie-react";
import { GETAPI } from "../../API/api";


function Verify() {

    const params= useParams();

    GETAPI(`email-verification/verify_email/${params.uid}/${params.token}`)
    .then((result) => {
        
        console.log(result.data)
    }).catch((err) => {
        console.log(err)
    });



    return (
        <>
            <Layout>

                <div className="h-screen flex justify-center items-center">

                    <div className="w-full bg-black p-20 flex justify-center items-center flex-col">

                        <div className="lottie-animation">
                            <Lottie
                                animationData={email}
                                loop
                                autoplay
                                

                                className="w-[200px] h-[200px] md:w-[400px] md:h-[400px]"
                            />
                        </div>
                        <div className="text-white text-xl md:text-2xl text-center">
                            <p className="mb-10">Email Verification Successfull</p>
                            <Link to='/' className="bg-sky-500 text-white rounded-full px-2 py-1 text-sm md:text-inherit md:px-5 md:py-2   scale-100 active:scale-75 transition-all hover:bg-sky-700">Go to Homepage</Link>
                        </div>

                    </div>

                </div>


            </Layout>
        </>
    );
}

export default Verify;