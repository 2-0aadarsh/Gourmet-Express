import Logo from "../ui/Logo"
import HeaderActions from "./HeaderActions";
import NavItems from "./NavItems"

const Header = () => {
  return (
    <header className="flex justify-between items-center  px-8 py-5 font-poppins ">
      {/* <Logo /> */}
      {/* nav links */}
      {/* search  */}
      {/* cart */}
      {/* profile */}
      {/* signin/signout */}
      <Logo />
      <NavItems />
      <HeaderActions />
    </header>
  );
}

export default Header