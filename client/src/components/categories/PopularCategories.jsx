import { FaDrumstickBite, FaHamburger, FaIceCream, FaLeaf, FaMugHot, FaPizzaSlice } from "react-icons/fa";

const PopularCategories = () => {
  
  const categories = [
    { img: <FaPizzaSlice />,    title: "Pizza",      no_of_restaurants: "42" },
    { img: <FaHamburger />,     title: "Burgers",    no_of_restaurants: "35" },
    { img: <FaIceCream />,      title: "Desserts",   no_of_restaurants: "28" },
    { img: <FaMugHot />,        title: "Breakfast",  no_of_restaurants: "24" },
    { img: <FaDrumstickBite />, title: "Chicken",    no_of_restaurants: "31" },
    { img: <FaLeaf />,          title: "Vegetarian", no_of_restaurants: "19" },
  ];

  return (
    <div className="flex justify-between gap-2">
      {
        categories.map((category, index) => {
          return (
            <div
              key={index}
              className="w-48 h-48 rounded-2xl flex flex-col items-center justify-center flex-wrap bg-white shadow-xl mt-4"
            >
              <div className="p-5 text-2xl text-[#ff6b35] bg-[#f8f9fa] rounded-full">
                {category.img}
              </div>
              <h3 className="font-bold text-xl mt-1">{category.title}</h3>
              <p className="text-[1.1rem] text-[#6c757d] mt-2">
                {category.no_of_restaurants} restaurants
              </p>
            </div>
          );
        })
      }
    </div>
  )
}

export default PopularCategories