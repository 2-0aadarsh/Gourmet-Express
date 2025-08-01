/* eslint-disable react/prop-types */

import { FaClock, FaStar } from "react-icons/fa";

const PopularDishes = ({ items }) => {
  return(
    <div className="card flex justify-between mt-10">
      {items.map((card) => {
        return (
          <div
            className="h-[500px] w-[300px] overflow-hidden rounded-2xl shadow-2xl"
            key={card.id}
          >
            <div
              key={card.id}
              className="img-container overflow-hidden rounded-t-xl w-full h-[250px] relative"
            >
              <img
                src={card.image}
                className="w-full h-full object-cover "
                alt=""
              />

              {card.badge && (
                <div className="absolute top-4 right-4 bg-green-500 text-white font-semibold px-3 py-1 rounded-3xl">
                  {card.badge}
                </div>
              )}
            </div>

            <div className="p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h2 className="text-[#264653] text-xl font-bold">
                  {card?.name}
                </h2>
                <p className="text-[#ff6b35] text-xl font-bold">
                  ${card?.price}
                </p>
              </div>

              <div className="flex items-center gap-5 font-normal text-md">
                <div className="flex justify-center items-center gap-1 text-[#ffc107]">
                  <FaStar />
                  <p className="text-[#6c757d]">
                    {card?.rating} ({card.reviewCount})
                  </p>
                </div>
                <div className="flex justify-center items-center gap-1 text-[#6c757d]">
                  <FaClock />
                  <p>{card?.prepTime} mins</p>
                </div>
              </div>

              <div className="desc text-[#6c757d] text-lg text-start">
                {card?.description}
              </div>
            </div>

            <div className="px-5 flex items-center justify-between">
              <button className="w-10 h-10 rounded-full bg-[#ff6b35] text-2xl font-semibold text-white flex items-center justify-center">
                <p>+</p>
              </button>

              <h2 tabIndex={0} className="text-[1.2rem]  text-[#333] cursor-pointer">
                {card?.restaurant}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularDishes