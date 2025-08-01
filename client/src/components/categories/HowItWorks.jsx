/* eslint-disable react/prop-types */

const HowItWorks = ({ items }) => {
  console.log(items)
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-3">
      
      {
        items.map((step) => {
          return (
            <div key={step.number} className="flex flex-col items-center justify-between gap-5 shadow-xl px-4 py-12">
              <div className="text-white text-2xl font-bold flex items-center justify-center h-5 w-5 p-8 rounded-full bg-[#ff6b35]">
                <p>{step.number}</p>
              </div>

              <h2 className="text-[#264653] text-2xl font-bold">
                {step.title}
              </h2>

              <p className="text-[#6c757d] text-[21px] leading-6">
                {step.description}
              </p>
            </div>
          );
        })
      }  
    
    </div>
  );
}

export default HowItWorks