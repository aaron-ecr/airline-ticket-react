import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';
export default () => {
  return(
    <React.Fragment>


      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav mr-auto navigation">
        
          <li className="nav-item">
 
            <NavLink exact={true} to="/" activeClassName='active' className="nav-link"><i className="fas fa-home"></i> Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/shopping-cart" activeClassName='active' className="nav-link"><i className="far fa-calendar-check"></i> Mis Reservas</NavLink>
          </li>
        </ul>


      </div> 


    </React.Fragment>
  );
}