const background = "bg-backgroundColorPrimary";

export const Page1=()=> {
    return (
        <div className="grid grid-cols-2 bg-white relative min-h-screen">
          <div className="flex flex-col align-center justify-items-center m-30 mt-80 w-96 ml-20">
          <div className="text-6xl text-black font-san">
            Welcome to 
          </div>   
          <div className="text-7xl text-blue-700 font-sans font-extrabold mb-10">
           goji health
          </div>
          <div className="text-xl text-gray-500 font-sans text-wrap">
            Connecting patient electronic health records to inventory management systems to identify inefficiencies in the healthcare supply chain
          </div>
          </div>
          <div className=" mt-24">
              <img src="/home.png" className="size-10/12 absolute right-0 w-max" />
          </div>
        </div>
    );
}

export default Page1;