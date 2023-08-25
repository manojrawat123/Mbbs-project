

function Layout({children}) {

   window.scrollTo(0,0);
   
    return ( 
        <>
           <div className="max-w-screen-xl	 mx-auto px-2 sm:px-10 md:p-5">
             {children}
           </div>
        </>
     );
}

export default Layout;