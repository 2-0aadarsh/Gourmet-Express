import { useContext } from "react"
import { ConfigContext } from "../../context/configContext";

const NavItems = () => {
  const { appConfig, header } = useContext(ConfigContext);
  const { navigation } = header;
  const { theme } = appConfig;

  console.log("navigation : ", navigation);
  console.log("theme : ", theme);
  return (
    <nav className={`flex gap-5 text-md font-medium text-[${theme.darkColor}]`}>
      {navigation.map((item) => (
        <div key={item.id} tabIndex={0} >{item.name}</div>
      ))}
    </nav>
  );
}

export default NavItems