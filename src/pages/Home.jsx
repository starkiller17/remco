import PropTypes from 'prop-types';

import Intro from '../components/intro/Intro';
import OurServices from '../components/ourServices/OurServices';
import HowWeDoIt from '../components/howWeDoIt/HowWeDoIt';
import AboutUs from '../components/aboutUs/AboutUs';
import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/NavBar';

function Home({ removeNavRelative }) {
  return (
    <>
      <NavBar removeNavRelative={removeNavRelative}></NavBar>
      <Intro></Intro>
      <OurServices></OurServices>
      <HowWeDoIt></HowWeDoIt>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </>
  );
}

Home.propTypes = {
  removeNavRelative: PropTypes.bool.isRequired,
};

export default Home;
