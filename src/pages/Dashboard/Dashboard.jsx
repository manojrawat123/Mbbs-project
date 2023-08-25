import { useEffect, useState } from "react";
import Layout from "../../utils/Layout";
import { HiOutlineCamera } from 'react-icons/hi'
import { CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { GETAPI } from "../../API/api";

function Dashboard() {

    const [showImage, setShowImage] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const id = useSelector(({reducer}) => reducer.user);
    const user = useSelector(({reducer}) => reducer.token);


    useEffect(() => {
        const fetchData = async () => {
            const { data } = await GETAPI(`accounts/${id}/`);
            setUserInfo(data);
            console.log(data);
        };

        fetchData();
    }, [id]);

    if (!user) {
        return <Navigate to="/login" />;
    }


    return (

        <>

            <Layout>



                <div className="dashboard bg-black/90 md:w-[80%] mx-auto px-3 md:px-6 py-7 text-white rounded">

                    <h1 className="text-xl md:text-3xl font-bold">My Profile</h1>

                    {/* <!-- Profile-Photo --> */}
                    <div className="intro mt-14 border-b-[1px] pb-6 border-b-slate-500/40">

                        <div className="profile-image flex gap-6 items-center">
                            <img src={`${userInfo?.user_profile.user_profile_image}`}
                                alt="profile"
                                className="w-20 h-20 md:w-32 md:h-32 object-cover object-top rounded-full"
                            />
                            <div className="other-info">
                                <h1 className="md:text-2xl font-semibold">{userInfo?.user.first_name} {userInfo?.user.last_name}</h1>
                                <p className="text-slate-400 font-semibold md:text-lg"> <span className="text-sm md:text-lg mr-1">&#10148;</span>{userInfo?.user_profile.user_address
                                }</p>

                                <div className="edit text-slate-300 font-medium mt-2 border-[1px] inline-block px-4 py-1 rounded-2xl cursor-pointer hover:bg-white hover:text-black scale-100 active:scale-90 transition-all select-none">
                                    Edit &#9998;
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* <!-- Personal-Information --> */}
                    <div className="personal-info mt-7  border-b-[1px] pb-6 border-b-slate-500/40">

                        <h1 className="text-xl md:text-3xl font-medium">Personal Information</h1>

                        <div className="all-info-grid grid sm:grid-cols-2 grid-cols-1 mt-4 gap-y-3 md:gap-y-7">

                            <div className="first">
                                <p className="text-slate-400 tracking-wide font-medium">First Name</p>
                                <p className="text-lg tracking-widest">{userInfo?.user.first_name}</p>
                            </div>

                            <div className="first">
                                <p className="text-slate-400 tracking-wide font-medium">Last Name</p>
                                <p className="text-lg tracking-widest">{userInfo?.user.last_name}</p>
                            </div>

                            <div className="first">
                                <p className="text-slate-400 tracking-wide font-medium">Email address</p>
                                <p className="text-lg tracking-widest">{userInfo?.user.email}</p>
                            </div>

                            <div className="first">
                                <p className="text-slate-400 tracking-wide font-medium">Phone</p>
                                <p className="text-lg tracking-widest">{userInfo?.user_profile.user_phone}</p>
                            </div>

                            <div className="first">
                                <p className="text-slate-400 tracking-wide font-medium">Father Name</p>
                                <p className="text-lg tracking-widest">{userInfo?.user_profile.user_father_name}</p>
                            </div>

                            <div className="first">
                                <p className="text-slate-400 tracking-wide font-medium">Budget</p>
                                <p className="text-lg tracking-widest">{userInfo?.user_profile.user_budget} Lakh</p>
                            </div>

                            <div className="first">
                                <p className="text-slate-400 tracking-wide font-medium">Selected College</p>
                                <p className="text-lg tracking-widest">{userInfo?.user_profile.user_college_preference}</p>
                            </div>

                        </div>

                    </div>

                    {/* <!-- Test-Info --> */}
                    <div className="Test-info mt-7">

                        <h1 className="text-xl md:text-3xl font-medium">Test Info</h1>

                        <div className="all-info-grid grid sm:grid-cols-2 grid-cols-1 mt-4 gap-y-3 md:gap-y-7">

                            <div className="first">
                                <p className="text-slate-400 tracking-wide font-medium">Test Score</p>
                                <p className="text-lg tracking-widest">{userInfo?.user_test_info.user_test_score}</p>
                            </div>

                            <div className="first">
                                <p className="text-slate-400 tracking-wide font-medium">Test Date</p>
                                <p className="text-lg tracking-widest">{userInfo?.user_test_info.user_test_date}</p>
                            </div>

                            <div className="first">
                                <p className="text-slate-400 tracking-wide font-medium">Test Expiry Date</p>
                                <p className="text-lg tracking-widest">{userInfo?.user_test_info.user_test_exp_date}</p>
                            </div>

                            <div className="first">
                                <p className="text-slate-400 tracking-wide font-medium">Test Type</p>
                                <p className="text-lg tracking-widest">NEET</p>
                            </div>

                            <div className="first">
                                <p className="text-slate-400 tracking-wide font-medium">Test Image</p>
                                <div onClick={() => setShowImage(true)}
                                      style={{ backgroundImage: `url(${userInfo?.user_test_info.user_test_document_image})` }}    
                                    className="w-28 h-20 md:w-36 md:h-24 border-2 md:z-10 border-slate-500/30 mt-2 cursor-pointer bg-cover bg-center bg-no-repeat relative group" >

                                    <span className="absolute flex justify-center items-center w-full h-full group-hover:bg-slate-500/80 top-0 left-0">
                                        <HiOutlineCamera className="text-white text-xl md:text-2xl" />
                                    </span>
                                </div>
                            </div>

                            {showImage &&
                                <div className="youtube-video-player fixed top-0 left-0 z-20 w-screen h-screen bg-black/80 flex items-center">

                                    <div className="h-[80%] w-[95%]  md:w-[90%] mx-auto md:px-0">

                                        <div className="close-icon fixed right-4 md:right-7 top-6" onClick={() => setShowImage(false)}>
                                            <CgClose className="text-white/80 transition-all hover:scale-125 hover:text-white cursor-pointer text-right text-xl" />
                                        </div>

                                        <div className="flex items-center justify-center h-full md:w-auto ">

                                            <img className="w-full h-[65%] md:h-full object-contain" src={`${userInfo.user_test_info.user_test_document_image}`} alt="score-card" />

                                        </div>

                                    </div>

                                </div>
                            }



                        </div>

                    </div>
                </div>


            </Layout>


        </>

    );
}

export default Dashboard;