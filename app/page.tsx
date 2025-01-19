import Hero from "../components/Hero";
import InfoBoxes from "../components/InfoBoxes";
import HomeProperties from "../components/HomeProperties";
import connectDb from "../config/database";
import FeaturedProperties from "../components/FeaturedProperties";

const HomePage = () => {
  connectDb();
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
    </>
  );
};

export default HomePage;
