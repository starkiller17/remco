import Intro from '../components/intro/Intro';
import OurServices from '../components/ourServices/OurServices';
import HowWeDoIt from '../components/howWeDoIt/HowWeDoIt';
import AboutUs from '../components/aboutUs/AboutUs';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <>
      <Intro></Intro>
      <OurServices></OurServices>
      <HowWeDoIt></HowWeDoIt>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </>
  );
}

export default Home;
