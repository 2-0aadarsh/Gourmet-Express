import { useContext } from "react"
import { ConfigContext } from "../../context/configContext";
import { FaApple } from "react-icons/fa";

const AppDownload = () => {
  const { appDownload } = useContext(ConfigContext);

  console.log(appDownload)
  return (
    <div className="max-w-[1400px] mx-auto h-[450px] px-10 bg-[#ff6b35] text-white flex items-center justify-between rounded-2xl">
      <div className="left flex flex-col justify-between gap-8">
        <h2 className="text-4xl font-extrabold">{appDownload.title}</h2>

        <p className="text-xl">{appDownload.description}</p>

        <div className="buttons flex items-center gap-4">
          {appDownload.buttons.map((button) => {
            return (
              <div
                key={button.id}
                className="relative w-56 h-20 flex items-center gap-2 px-3 text-white border-[1px] border-[#f8f9fa65] rounded-xl overflow-hidden"
                tabIndex={0}
              >
                <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-white opacity-15  z-20"></div>
                <div className="icon text-4xl">
                  <FaApple />
                </div>

                <div className="details flex flex-col items-start justify-between">
                  <div className="text-1 ">{button.text1}</div>
                  <div className="text-2 text-2xl font-bold font-mono tracking-tighter">
                    {button.text2}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="right">
        <img src={appDownload.image} alt="" />
      </div>
    </div>
  );
}

export default AppDownload