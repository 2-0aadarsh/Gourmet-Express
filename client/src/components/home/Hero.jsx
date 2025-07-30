import { useContext } from "react"
import { ConfigContext } from "../../context/configContext"
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  const { heroSection } = useContext(ConfigContext);

  if (!heroSection) {
    return null; // or a loading spinner / fallback UI
  }

  const { backgroundImage } = heroSection;

  return (
    <section className="relative">
      <div className="hero-section w-full h-[500px] overflow-hidden">
        <img
          src={backgroundImage}
          className="w-full h-full object-cover "
          alt=""
        />
      </div>

      {/* Gradient Overlay (top to bottom with 0.6 opacity) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/60"></div>

      {/* Content on top */}
      <div className="absolute top-0 bottom-0 max-w-[600px] min-w-[600px] text-white pt-16 pl-6 flex flex-col items-start gap-6">
        <h1 className="text-[3.5rem] leading-[1.2] font-bold">
          Delicious food delivered to your doorstep
        </h1>

        <h3 className="text-[1.3rem] opacity-90">
          Discover the best restaurants in your city and enjoy fresh food at
          home
        </h3>

        <div
          className="btn flex items-center justify-center gap-2 bg-orange-500 px-5 py-3 rounded-3xl"
          tabIndex={0}
        >
          <FaSearch />
          <button className="text-lg font-semibold" tabIndex={1}>order now</button>
        </div>
      </div>
    </section>
  );
};


export default Hero