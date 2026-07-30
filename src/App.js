/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
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
        // document.body.style.paddingTop = nav.offsetHeight + 'px';
        setRemoveNavRelative(true);
      } else {
        // document.body.style.paddingTop = 0;
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
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
