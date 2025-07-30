import { useContext } from "react";
import { ConfigContext } from "../../context/configContext";
import { FaUtensils } from "react-icons/fa";

const Logo = () => {
  const { appConfig, header } = useContext(ConfigContext);

  const { logo } = header;
  const { theme } = appConfig;

  console.log(logo)
  return (
    <strong className={`flex justify-between text-[${theme.primaryColor}] items-center text-3xl text-orange-500`}>
      <FaUtensils />
      <h1>{logo.text}</h1>
    </strong>
  );
};

export default Logo;
