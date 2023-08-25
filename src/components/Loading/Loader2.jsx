function Loader2() {
    return ( 
        <>
            <div className="section-container flex flex-col lg:flex-row gap-5">
                
                <div className="lg:flex-1 h-72 rounded-md bg-gray-400 animate-pulse"></div>
                <div className="lg:flex-1 md:h-72 ">
                   <p className=" h-4 md:h-8 w-full md:w-9/12 rounded-sm bg-gray-400 animate-pulse"></p>
                   <p className=" h-2 md:h-4 w-2/4 md:w-2/6 rounded-md mt-2 bg-gray-400 animate-pulse"></p>

                   <p className=" h-2 md:h-4 w-full rounded-md mt-4 bg-gray-400 animate-pulse"></p>
                   <p className=" h-2 md:h-4 w-full rounded-md mt-2 bg-gray-400 animate-pulse"></p>
                   <p className=" h-2 md:h-4 w-full rounded-md mt-2 bg-gray-400 animate-pulse"></p>

                </div> 
            </div>    

        </>
     );
}

export default Loader2;