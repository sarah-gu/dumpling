const background = "bg-backgroundColorPrimary";

export const Page2=()=> {
    return (
        <div className="relative min-h-screen flex flex-col bg-white">
            <div className="mt-40 container max-w-screen-xl flex justify-center items-center grid gap-12 grid-cols-3 ml-24 mr-24">
                <div>
                    <div className="flex flex-row">
                    <img src="/clinical outcomes.png" className="h-20" />
                        <h2 className="text-blue-700 font-bold text-3xl">Improve Clinical Outcomes</h2>
                    </div>
                    <p className="text-xl">Linking preference cards with inventory management systems to better understand clinical outcomes</p>
                </div>
                <div>
                    <div className="flex flex-row">
                        <img src="/supply chain.png" className="h-20" />
                        <h2 className="text-blue-700 font-bold text-3xl">Streamline supply chain efficiency</h2>
                    </div>
                    <p className="text-xl">Understanding inventory demand and supply will allow forecasting and exploring cost efficiency</p>
                </div>
                <div>
                    <div className="flex flex-row">
                        <img src="/ai logo.png" className="h-20" />
                        <div className="text-blue-700 font-bold text-3xl">AI-based recommendations</div>
                    </div>
                    <p className="text-xl">Leveraging AI and data analytics to provide tailored recommendations to supply chain managers</p>
                </div>

            </div>

            <div className="bg-gray-100 h-100 mt-32 rounded-lg grid grid-cols-2"> 
                <div className="m-12 mt-32"> 
                    <h2 className="text-2xl text-blue-700 font-bold">
                        Centralize your hospital's EHR and ERP data to create powerful data analytics
                    </h2>
                    <p>
                        Automate decision making on inventory ordering and make accurate, data-driven predictions on hospital needs. 
                    </p>
                </div>
                <div>
                    <img src="supply demand.png" className="m-10 h-80"/>
                </div>
              </div>
            

            <div className="m-10 text-center text-xl">
                Built by former employees of 
                <div className="grid grid-cols-6 gap-10 center-items justify-center content-around">
                    <img src="meta.png"  className="mt-6"/>
                    <img src="microsoft.jpeg" className="mt-12" />
                    <img src="columbia.png" className="h-36" />
                    <img src="citadel.png" className="mt-16" />
                    <img src="asana.png" className="mt-16" />
                    <img src="goldman.png" className="mt-2" /> 
                </div>
            </div>

            {/* <div className="m-10 text-center text-xl">
                Our partnerships
            </div>  */}

            <div className="h-100 rounded-lg grid grid-cols-2">
                <img src="requisitions.png" className="pl-10 pr-10" />
                <div className="mt-20"> 
                    <h2 className="text-2xl text-blue-700 font-bold mb-8">
                        Revolutionizing the hospital supply chain system
                    </h2>
                    <p className="mb-4">
                        Key features
                    </p>
                    <ul>
                        <li> • Vendor relationship management system</li>
                        <li> • Inventory management system that links to EHR data and clinical outcomes</li>
                        <li> • Procedure-specific preference cards connected to inventory supply levels</li>
                        <li> • Synthesized AI-powered analytics and reporting page that provides syggestions to improve supply-chain efficiency</li>
                    </ul>
                </div>
            </div>
           
            <div className="bg-gray-100 h-100 mt-10 rounded-lg grid grid-cols-2">
                <img src="goji.png" className="h-16 ml-36 mt-8 mb-8" /> 
                <div className="mt-14 ml-60">
                    <a href="mailto:gojihealthinfo@gmail.com" className="bg-blue-100 p-4 hover:bg-blue-200 rounded-lg">Contact sales</a> 
                </div>
            </div>
        </div>
    );
}

export default Page2;