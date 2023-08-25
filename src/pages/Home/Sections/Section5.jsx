import {HiOutlineMail,HiPhoneMissedCall,HiOutlineBriefcase} from "react-icons/hi"

function Section5() {
    return ( 

        <div className="contact-form mt-36">

            {/* TITLE */}
            <div className="text-center">
                     <p className="text-white text-base">Get In Touch</p>
                     <h1 className="text-3xl md:text-4xl font-semibold text-blue-400">Contact Us</h1>
            </div>
          
             <div className="flex flex-col lg:flex-row lg:gap-16 gap-10 mt-16">

                {/* SOCIAL-MEDIA-CONTACT */}
                <div className="flex flex-col gap-10 ">

                    <div className="email text-center text-white px-14 py-5 leading-7 rounded-2xl bg-blue-900">

                        <div className="icon text-2xl text-white flex justify-center mb-4"><HiOutlineMail/></div>
                        <p className="font-semibold text-lg">Email</p>
                        <p className="text-base font-semibold">dummy@gmail.com</p>
                        <p className="text-blue-700 font-semibold mt-3 cursor-pointer">Send a message</p>
                    </div>

                    <div className="email text-center text-white px-14 py-5 leading-7 rounded-2xl bg-blue-900">

                        <div className="icon text-2xl text-white flex justify-center mb-4"><HiOutlineBriefcase/></div>
                        <p className="font-semibold text-lg">Messanger</p>
                        <p className="text-base font-semibold">dummy@gmail.com</p>
                        <p className="text-blue-700 font-semibold mt-3 cursor-pointer">Send a message</p>
                    </div>

                    <div className="email text-center text-white px-14 py-5 leading-7 rounded-2xl bg-blue-900">

                        <div className="icon text-2xl text-white flex justify-center mb-4"><HiPhoneMissedCall/></div>
                        <p className="font-semibold text-lg">WhatsApp</p>
                        <p className="text-base font-semibold">+123456789</p>
                        <p className="text-blue-700 font-semibold mt-3 cursor-pointer">Send a message</p>
                    </div>

                </div>


                {/* CONTACT-FORM */}
                <div className="grow">
                     
                     <form action="" className="flex flex-col gap-14">

                        <input type="text" placeholder="Your Full Name" className="bg-transparent border-2 border-blue-700/30 p-5  placeholder:text-slate-600 rounded-xl text-white"/>
                        <input type="email" placeholder="Your Email" className="bg-transparent border-2 border-blue-700/30 p-5  placeholder:text-slate-600 rounded-xl text-white" />
                        <textarea className="bg-transparent border-2 border-blue-700/30 p-5  placeholder:text-slate-600 rounded-xl
                         text-white resize-none h-40 lg:h-52" defaultValue='Your Message'>
                          
                        </textarea>            
                        <button className="bg-sky-500 text-white rounded-full px-7 py-3 mt-10 scale-100 active:scale-75 transition-all hover:bg-sky-700">Send Message</button>
                     </form>

                </div>

             </div>
              

        </div>
     );
}

export default Section5;