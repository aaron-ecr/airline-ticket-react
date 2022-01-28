import React from 'react';
import { Link } from 'react-router-dom';
import mycar from '../../../assets/shopping-cart.png';
import './navBar.css'

export default (props) => {

    //console.log("NavCartCount", props);
  return(
    <div>
    

      <Link id="nav-view-cart-link" to="/shopping-cart" className="btn btn-secondary black">
      <div className="navbar-brand">
        <img src={mycar} width="28" height="28" >
         
        </img>
      </div>
          { props.cartItemCount } 
      </Link>

      
    </div>
  );
}
