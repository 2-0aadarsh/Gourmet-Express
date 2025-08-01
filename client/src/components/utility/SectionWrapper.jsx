/* eslint-disable no-unused-vars */
import { useContext } from "react";
import FeaturedRestaurants from "../categories/FeaturedRestaurants";
import HowItWorks from "../categories/HowItWorks";
import PopularCategories from "../categories/PopularCategories";
import PopularDishes from "../categories/PopularDishes";
import SectionDesc from "../ui/SectionDesc";
import Title from "../ui/Title";
import { ConfigContext } from "../../context/configContext";

const SectionWrapper = () => {
  const { categories } = useContext(ConfigContext);
  let [popularCategories, popularDishes, featuredRestaurants, howItWorks] = categories;


  const sections = [
    {
      title: "Popular Categories",
      desc: "Browse through our diverse food categories to find your favorite cuisine",
      sectionContent: <PopularCategories />,
    },
    {
      title: "Popular Dishes",
      desc: "Most ordered dishes by our customers this week",
      sectionContent: <PopularDishes items={popularDishes.items} />,
    },
    {
      title: "Featured Restaurants",
      desc: "Top-rated restaurants near your location",
      sectionContent: <FeaturedRestaurants items={featuredRestaurants.items} />,
    },
    {
      title: "How It Works",
      desc: "Get your favorite food in 4 simple steps",
      sectionContent: <HowItWorks items={howItWorks.steps} />,
    },
  ];

  return (
    <main className="py-9 px-16">
      {sections.map((section, index) => {
        return (
          <section
            key={index}
            className=" p-4 m-2 text-center mb-8"
          >
            <div className="flex flex-col gap-3">
              <Title title={section.title} />
              <SectionDesc desc={section.desc} />
            </div>

            <div className="section-content">{section.sectionContent}</div>
          </section>
        );
      })}
    </main>
  );
}

export default SectionWrapper