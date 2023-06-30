/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Intro from './components/intro/Intro';
import OurServices from './components/ourServices/OurServices';
import HowWeDoIt from './components/howWeDoIt/HowWeDoIt';
import 'animate.css';

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const [removeNavRelative, setRemoveNavRelative] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('navbar');
    const navTop = nav.offsetTop;

    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
      if (window.scrollY >= navTop) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        setRemoveNavRelative(true);
      } else {
        document.body.style.paddingTop = 0;
        setRemoveNavRelative(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <NavBar removeNavRelative={removeNavRelative}></NavBar>
      <Intro></Intro>
      <OurServices></OurServices>
      <HowWeDoIt></HowWeDoIt>
    </div>
  );
}

export default App;
