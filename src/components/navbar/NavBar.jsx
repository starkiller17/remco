import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logoREMCO from './assets/img/remco_logo.png';
import './assets/css/navbar.css';
// import whatsAppIcon from './assets/img/whatsapp_icon_144.svg';

function NavBar({ removeNavRelative }) {
  const [isBurguerMenuActive, setIsBurguerMenuActive] = useState(false);

  const handleBurguerClick = () => {
    setIsBurguerMenuActive(!isBurguerMenuActive);
  };

  return (
    <>
      <header className="header">
        <h1>
          <a href="/">REMCO</a>
        </h1>
      </header>
      <nav
        className={
          removeNavRelative ? 'navbar is-fixed-top' : 'navbar navbar-relative'
        }
        role="navigation"
        aria-label="main navigation"
        id="navbar"
        style={{ paddingTop: '25px' }}
      >
        <div className="navbar-brand ml-6">
          <a
            className={
              removeNavRelative ? 'navbar-item display-logo' : 'navbar-item'
            }
            id="logo"
          >
            <img
              src={logoREMCO}
              style={{ minHeight: '50px' }}
              alt="Logo REMCO"
            />
          </a>

          <a
            role="button"
            className={
              isBurguerMenuActive ? 'navbar-burger is-active' : 'navbar-burger'
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
            id="burguer-button"
            onClick={handleBurguerClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navMenu"
          className={
            isBurguerMenuActive ? '"navbar-menu is-active' : 'navbar-menu'
          }
        >
          <div className="navbar-end mr-6">
            <a className="navbar-item">Marcas</a>
            <a className="navbar-item">Ubicación</a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Conócenos</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">Misión/Visión</a>
                <a className="navbar-item">Valores</a>
                <a className="navbar-item">Principios Empresariales</a>
                <a className="navbar-item">Calidad Laboral</a>
                <a className="navbar-item">Responsabilidad Empresarial</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  removeNavRelative: PropTypes.bool.isRequired,
};

export default NavBar;
