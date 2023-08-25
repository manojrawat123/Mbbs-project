import { useEffect, useState } from "react";
import Layout from "../../utils/Layout";
import { useNavigate } from "react-router";
import Lottie from "lottie-react";
import success from '../../utils/success-animation.json'

function Success() {

    const [count, setCount] = useState(6)

    const navigate = useNavigate()

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCount((prevCount) => {
            if (prevCount <= 1) {
              clearInterval(intervalId);
              navigate('/login');
            }
            return prevCount - 1;
          });
        }, 1000);
      
        return () => {
          clearInterval(intervalId);
        };
      }, []);

    return (
        <>

            <Layout>

                <div className="h-screen flex justify-center items-center">

                    <div className="w-full bg-black p-20 flex justify-center items-center flex-col">

                        <div className="lottie-animation">
                            <Lottie
                                animationData= {success}
                                loop
                                autoplay
                                style={{ width: 400, height: 400 }}
                            />
                        </div>
                        <div className="text-white text-xl md:text-2xl">
                            Registration Sucess Redirecting {count} to login Page
                        </div>

                    </div>

                </div>


            </Layout>

        </>
    );
}

export default Success;