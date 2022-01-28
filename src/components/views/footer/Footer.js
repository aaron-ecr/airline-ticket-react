import React from 'react';
import { NavLink } from 'react-router-dom';
import airline from '../../../assets/world_airlines.png';
import './Footer.css';


const paddingTop =
{
  paddingTop: '3px'
}


export default () => {
  return (
    <div style={paddingTop}>
      <footer className="footer-distributed">

        <div className="footer-left">

          <h3><img src={airline} width="80" height="80" /> Aaronline <span> Airlines</span> </h3>

          <p className="footer-links">
          <NavLink exact={true} to="/" activeClassName='active' className="nav-link">Inicio</NavLink>

          <NavLink to="/shopping-cart" activeClassName='active' className="nav-link">Mis Reservas</NavLink>
          </p>

         
        </div>

        <div className="footer-center">

          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>México </span> Ciudad de México, Miguel Hidalgo</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:aaron.espi06@gmail.com">aaron.espi06@gmail.com</a></p>
          </div>

          <div>
            <i className="far fa-copyright"></i>
            <p> 2022.  Aaron Espinoza</p>
          </div>

        </div>

        <div className="footer-right">

          <p className="footer-company-about">
            <span>About me</span>
            Front-end Developer, React App Airlines Tickets
          </p>

          <div className="footer-icons">
            <a href="https://www.linkedin.com/in/paaronespinoza/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.facebook.com/aaron.spinozapre" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/aaron_maiden666/" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="" target="_blank"><i className="fab fa-github"></i></a>


          </div>

        </div>

      </footer>
    </div>

  );

}