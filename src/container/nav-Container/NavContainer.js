import React, { Component } from 'react';
import { connect } from 'react-redux';

import { countCart } from '../../lib/cartLib';
import NavBar from '../../components/views/nav-Bar/NavBar';
import NavCartCount from '../../components/views/nav-Bar/NavCartCount';


class NavContainer extends Component {
  render() {

    //console.log("this.props.NavContainer", this.props);
    return (
      <nav className="navbar navbar-expand-md">

        <NavBar />

        <NavCartCount cartItemCount={this.props.cartItemCount} />
        
      </nav>
    )
  }
}


const mapStateToProps = state => {
  return countCart(state.cart);
}

export default connect(mapStateToProps)(NavContainer);