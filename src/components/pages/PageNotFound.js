import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import img_404 from '../../assets/404.svg';
import rocket from '../../assets/rocket.svg';
import earth from '../../assets/earth.svg';
import moon from '../../assets/moon.svg';
import astronaut from '../../assets/astronaut.svg';


export default () => {
  
  return(
    <div className="bg-purple">
      <div>
        <div className="custom-navbar">
          <div className="brand-logo">
            <img src={logo} alt="logo" width="80px" />
          </div>
        </div>
        <div className="central-body">
          <img className="image-404" alt="404" src={img_404} width="300px" />
          <Link to="/" className="btn-go-home">IR A INICIO</Link>
        </div>
        <div className="objects">
          <img className="object_rocket" alt="rocket" src={rocket} width="40px" />
          <div className="earth-moon">
            <img className="object_earth" alt="earth" src={earth} width="100px" />
            <img className="object_moon" alt="moon" src={moon} width="80px" />
          </div>
          <div className="box_astronaut">
            <img className="object_astronaut" alt="astronaut" src={astronaut} width="140px" />
          </div>
        </div>

      </div>
    </div>
  );
}
