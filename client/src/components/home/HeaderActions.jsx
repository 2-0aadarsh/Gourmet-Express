import Search from "./Search";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
const HeaderActions = () => {
  return (
    <div className="flex items-center justify-between ">
      <Search />

      <div className="flex items-center justify-center gap-3">
        <div
          className="cart relative ml-5 text-2xl cursor-pointer"
          tabIndex={0}
        >
          <FaShoppingCart />
          <div className="text-[0.7rem] font-semibold bg-orange-600 text-white w-[18px] h-[18px]  rounded-full flex items-center justify-center absolute left-3 bottom-3">
            10
          </div>
        </div>

        <div className="user-icon text-[1.2rem] cursor-pointer " tabIndex={0}>
          <FaUser />
        </div>

        <div className="btn ">
          <button className="capitalize pt-3 pb-3 pl-6 pr-6 border-2 border-orange-600 rounded-[50px] text-base font-semibold text-orange-600 flex items-center justify-center">
            sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderActions