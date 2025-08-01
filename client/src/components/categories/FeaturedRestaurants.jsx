/* eslint-disable react/prop-types */
import { FaBicycle, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const FeaturedRestaurants = ({ items }) => {
  console.log(items)
  return (
    <div className="flex justify-between mt-10 ">
      {
        items.map((res) => {
          return (
            <div
              key={res.id}
              className="w-[430px] h-[400px] shadow-lg rounded-2xl"
            >
              <div className="img-container w-full h-1/2 rounded-t-2xl  overflow-hidden">
                <img
                  src={res.image}
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>

              <div className="p-7  content-container h-1/2 flex flex-col justify-between">
                <div className=" h-[60%] rounded-b-2xl  flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <h2 className="text-2xl font-bold text-[#264653]">
                        {res.name}
                      </h2>
                      <p className="bg-[#f8f9fa] text-[#6c757d] px-4 py-1 rounded-2xl">
                        {res.type}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex items-center justify-center gap-1 text-[#ffc107]">
                        <FaStar />
                        <p className="text-[#6c757d]">
                          {res.rating} ({res.reviewCount})
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-1 text-[#6c757d]">
                        <FaLocationDot />
                        <p className="text-md font-normal">{res.distance} mi</p>
                      </div>
                    </div>
                  </div>

                  <p className="h-[1px] bg-[#e9ecef] "></p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#6c757d]">
                    <p className="text-2xl">
                      <FaBicycle />
                    </p>
                    <p className="font-medium">${res.deliveryFee} delivery</p>
                  </div>

                  <button className="capitalize text-lg text-white font-medium bg-[#ff6b35] px-5 py-2 rounded-full">
                    view menu
                  </button>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default FeaturedRestaurants