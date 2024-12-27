import { features } from "../constants"

const FeatureSection = () => {
  return (
    <div className="relative mt-14 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6
        font-medium text-lg px-2  py-1 uppercase">Feature</span>
        <h1 className="text-3xl sm:text-5xl lg-text-6xl mt-10 lg:mt-16 tracking-wide">Easily Build <span className="bg-gradient-to-r from-orange-600 to-orange-900 text-transparent font-bold bg-clip-text">Your Code</span></h1>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {
            features.map((features,index)=>(
                <div key={index} className="w-full flex flex-col justify-center items-center sm:w-l/2 lg:w-1/3">
                    <div className="flex">
                        <div className="flex mx-6 h-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                            {features.icon}                            
                        </div>
                        <h5 className="mt-1 mb-6 text-xl">{features.text}</h5>
                        <div></div>
                    </div>
                        <p className="text-md w-80 lg:w-full mx-auto lg:ml-0 text-center p-2 mb-20 text-neutral-500">{features.description}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default FeatureSection
