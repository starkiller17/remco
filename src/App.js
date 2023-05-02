/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Intro from './components/intro/Intro';
import OurServices from './components/ourServices/OurServices';
import 'animate.css';

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const [removeNavRelative, setRemoveNavRelative] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('navbar');
    const navTop = nav.offsetTop;

    function reveal() {
      var reveals = document.querySelector('.reveal');
      console.log(reveals);
      // for (var i = 0; i < reveals.length; i++) {
      //   var windowHeight = window.innerHeight;
      //   var elementTop = reveals[i].getBoundingClientRect().top;
      //   var elementVisible = 150;
      //   if (elementTop < windowHeight - elementVisible) {
      //     reveals[i].classList.add('animate__animated');
      //   } else {
      //     reveals[i].classList.remove('animate__animated');
      //   }
      // }
    }

    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
      reveal();
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
    </div>
  );
}

export default App;
