const background = "bg-backgroundColorPrimary";

export const Page1=()=> {
    return (
        <div className={`relative min-h-screen flex ${background}`}>
        <div className="container max-w-screen-xl mx-auto flex flex-row text-4xl ">
          <div className="flex flex-col align-center justify-items-center m-30 mt-80 w-96">
          <div className="text-6xl text-black font-san">
            Welcome to 
          </div>   
          <div className="text-6xl text-blue-700 font-sans font-extrabold mb-10">
            Dumpling.AI
          </div>
          <div className="text-xl text-gray-500 font-sans text-wrap">
          Connecting patient electronic health records to inventory management systems to identify inefficiencies in the healthcare supply chain
            </div>
          </div>
          <div className="absolute right-0 w-max">
              <img src="/home.png" className="h-200px w-auto mt-20" />
            </div>
            </div>
        </div>
    );
}

export default Page1;