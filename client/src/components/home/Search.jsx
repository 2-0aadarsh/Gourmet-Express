import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div
      tabIndex={0}
      className=" flex justify-center items-center border-2 border-gray-200 rounded-full px-2 py-1 text-sm gap-2"
    >
      <IoSearch className="text-lg text-gray-500" />
      <input
        type="text"
        name=""
        id=""
        className="outline-none"
        placeholder="search food or restaurant"
      />
    </div>
  );
};

export default Search;
