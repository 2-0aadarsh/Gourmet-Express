import { useContext } from "react";
import { ConfigContext } from "../../context/configContext";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

// Map string names (from your JSON) to actual icon components
const ICON_MAP = {
  FaFacebook: FaFacebook,
  FaTwitter: FaTwitter,
  FaInstagram: FaInstagram,
  FaLinkedinIn: FaLinkedinIn,
};

const Footer = () => {
  const { footer } = useContext(ConfigContext);
  const { about, links, copyright } = footer;
  const { text, socialLinks } = about;

  return (
    <div className="mt-16 w-full bg-[#264653] text-white px-16 pt-16">
      <div className="top w-full border-b-2 border-[#6c757d44] pb-24 flex gap-24">
        <div className="w-1/3 flex flex-col justify-between gap-2 py-7">
          <h1 className="text-5xl">Gourmet Express</h1>
          <p className="text-lg text-[#6c757d]">{text}</p>
          <div className="socialLinks flex space-x-4 mt-4">
            {socialLinks.map((social, idx) => {
              const IconComp = ICON_MAP[social.icon];
              return IconComp ? (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 bg-[#6c757d58] p-3 rounded-full"
                >
                  <IconComp size={24} color="white" />
                </a>
              ) : null;
            })}
          </div>
        </div>

        <div className="w-2/3  flex justify-between">
          {links.map((obj, index) => {
            return (
              <div className="" key={index}>
                <div className="title relative">
                  <h4 className="text-[24px] font-bold ">{obj.title}</h4>
                  <span className="inline absolute w-16 h-[3px] bg-[#ff6b35] left-0 top-12 "></span>

                  <div className="mt-9 flex flex-col gap-3 text-xl text-[#6c757d]">
                    {obj.title === 'Contact Us' ? obj.items.map((item, index) => {
                      return( 
                      <div className="" key={index}>
                        {Object.keys(item)} : {Object.values(item)}
                      </div> 
                    )}) 
                    : 
                    obj.items.map((item, index) => {
                      return (
                        <a
                          href={item.url}
                          key={index}
                          className="cursor-pointer hover:text-[#ff6b35]"
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}



        </div>
      </div>

      <div className="bottom pt-6 pb-7 text-center text-[#e9ecefb8]">
        <p>{copyright}</p>
      </div>
    </div>
  );
};

export default Footer;
