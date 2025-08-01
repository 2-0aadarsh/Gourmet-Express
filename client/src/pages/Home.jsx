import AppDownload from "../components/home/AppDownload";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import SectionWrapper from "../components/utility/SectionWrapper";

/* 
  <Header/>
  <Hero/>
  <PopularCategories/>
  <PopularDishes/>
  <FeaturedRestaurants/>
  <HowItWorks/>
  <AppDownload/>
  <Footer/>
*/
const Home = () => {
  return <div>
    <Header />
    <Hero />
    <SectionWrapper  />
    <AppDownload />
    <Footer />
    
  </div>;
};

export default Home;
