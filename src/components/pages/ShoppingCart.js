import React, { useState } from "react";
import CartList from '../../container/cart-list/CartList';
import { connect } from 'react-redux';
import { countCart } from '../../lib/cartLib';
import mycar from '../../assets/carrito2.png';
import  ModalForm  from '../modal-form/ModalForm';
import "bootstrap/dist/css/bootstrap.css";


const styleTextAmount =
{
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'green', fontFamily: 'Trebuchet MS'
}

const styleText =
{
    fontSize: '26px',
    fontWeight: 'bold',
    color: 'blue', fontFamily: 'Trebuchet MS'
}


function ShoppingCart(props) {

    let subListt = {};
    const cartList = props.cart || {};
    const cartListCount = cartList.length;
    //console.log("Shopping-Cart_cartList", props);
   // console.log("ShoppingCount", cartListCount);
 
    subListt = cartList.map((flightItem, index) => {

        if(!flightItem.cumulativeFlight){
            return  flightItem.price
        }else{
            return flightItem.cumulativeFlight.totalFare
        }

    }) 

    const totalListFlight =subListt.reduce((a, b) => a + b, 0);
   

      // console.log("listTotal", totalListFlight);

    // eslint-disable-next-line no-undef
    let formatPrice = numeral(totalListFlight);

    return (
        <React.Fragment>
            <div className="container main-container " style={{ padding: '20px' }}>



                <h3 style={styleText} className="center my-cart navbar-brand">  <img src={mycar} width="50" height="50" /> Mi Carrito: (  {props.cartItemCount} )    </h3>
                <CartList />

            </div>
            <hr />
            <div style={styleText}>


                <ModalForm acount={cartListCount} data={cartList} />
                <div>
                    <h3 style={styleTextAmount} className="center my-cart navbar-brand">     Total:  {formatPrice.format('$ 0,0')}  MXN</h3>
                </div>

            </div>

        </React.Fragment>

    );

}

const mapStateToProps = state => {
    return countCart(state.cart);
}



export default connect(mapStateToProps)(ShoppingCart);