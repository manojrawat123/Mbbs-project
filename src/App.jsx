import Navbar from "./components/Navbar";
import College from "./pages/College/College";
import Home from "./pages/Home/Home";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import SingleCollege from "./pages/SingleCollege/SingleCollege";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Success from "./pages/Register/Success";
import { useSelector } from "react-redux";
import LoadingCard from "./components/Loading/Loader1";
import Verify from "./pages/Register/Verify";
import FloatLabels from "./components/FloatingLabels/FloatLabel";
import Profile from "./pages/Register/Profile";
import MyHome from "./pages/Homev1/MHome";
import MyContact from "./pages/MContact/MyContact"; 
import MyFooter from "./components/Fotter/Fotter";

function App() {

  const user= useSelector(({reducer})=> reducer.user)
  return (
     <div className="app">
       
       <BrowserRouter>
          <FloatLabels/> 
          <Routes>
               
               {/* <Route path="/" element={<Home/>} /> */}
               <Route path="/" element={<MyHome/>} />
               <Route path='/colleges' element= {<College/>}/>
               <Route path="/colleges/:id" element={<SingleCollege/>}/>
               <Route path='/login' element={user ? <Navigate to='/dashboard'/>:<Login/>} />
               <Route path="/register" element={user ? <Navigate to='/dashboard'/>:<Register/>} />
               <Route path="/complete-profile" element={<Profile />} />
               <Route path="/dashboard" element= {<Dashboard />}/>
               <Route path="/success" element={<Success />} />
               {/* <Route path="/contact" element={<LoadingCard/>} /> */}
               <Route path="/contact" element={<MyContact />} />
               <Route path="/verify-email/:uid/:token" element={<Verify />} />
          </Routes>
          <Navbar/>

          <MyFooter />

       </BrowserRouter>  
     </div>
  );
}

export default App;
