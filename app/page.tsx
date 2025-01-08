import Hero from '../components/Hero';
import InfoBoxes from '../components/InfoBoxes';
import HomeProperties from '../components/HomeProperties';
import connectDb from '../config/database';

const HomePage = () => {
  console.log(process.env.MONGODB_URI)
  connectDb()
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;

