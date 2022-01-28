import React from 'react';
import { CartFlightInfo } from '../../components/cart-items/CartFlightInfo';
import { CartMultInfo } from '../../components/cart-items/CartMultInfo';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';
import '../../components/flights-grid/flight-grid.css';


const CartList = (props) => {


    //console.log("CartList", props);

    const cartList = props.cart || {};
   // const cartListCount = cartList.length;

    //console.log("flights", cartList);

    //console.log("countCartLIST", cartListCount);

    return (

        <div className="flights-info-container">

            {cartList && cartList.map((flightItem, index) => {


                return (
                    
                    <React.Fragment>
                    {flightItem.cumulativeFlight ?

                   
                        <div>
                        { console.log()}
                        <CartMultInfo key={index} data={flightItem.cumulativeFlight} />
                        <div className="Add-Cart">
                            <button onClick={() => console.log(props.removeFromCart(flightItem.cumulativeFlight))}  className="btn btn-danger">Borrar</button>
                        </div>
                        </div>
                        : <div>
                        <CartFlightInfo key={index} data={flightItem} />
                        <div className="Add-Cart">
                            <button onClick={() => props.removeFromCart(flightItem)} className="btn btn-danger">Borrar</button>
                        </div>
                        </div>
                    }

                    </React.Fragment>

              
                );
                
            })}


        </div>

    );

}


function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList);