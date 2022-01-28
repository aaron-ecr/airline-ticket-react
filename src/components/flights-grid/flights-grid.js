import React from 'react';
import './flight-grid.css';
import { FlightSearchInfo } from './../flight-search-info/flight-search-info';
import { FlightInfo } from './../flight-info/flight-info';
import { MultiFlightInfo } from './../multi-flight-info/multi-flight-info';

import { addToCart } from '../../actions/index';
import { connect } from 'react-redux';


const FlightsGrid = (props) => {

  //console.log("props.GTID", props);
  const flights = props.flights || {};

  //console.log("flights_TIII", flights);
  const flightsCount = (flights.nonStopFlights && flights.nonStopFlights.length) + (flights.multiStopFlights && flights.multiStopFlights.length)
  //console.log("flightsCount", flightsCount);

  



  return (
    <div className="flights-info-container">
      {props.criteria && <FlightSearchInfo criteria={props.criteria} count={flightsCount || 0} />}
      {flights.nonStopFlights && flights.nonStopFlights.map((flight, index) => {
        //console.log("flight-map0", flight);
        //console.log("index-map0", index);
        return (
          <React.Fragment>
            <FlightInfo key={index} data={flight} />
            <div className="Add-Cart">
              <button onClick={() => props.addToCart(flight)} className="btn btn-primary">Agregar</button>
            </div>
          </React.Fragment>
        );
      })}
      {flights.multiStopFlights && flights.multiStopFlights.map((flight, index) => {
        //console.log("flight-map", flight);
        //console.log("index-map", index); 
        return (
          <React.Fragment>
            <MultiFlightInfo key={index} data={flight} />
            <div className="Add-Cart">
              <button onClick={() => props.addToCart(flight)} className="btn btn-primary">Agregar</button>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

function mapStateToProps(state, props) {
  return {
    //OH
    cart: state.item
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => dispatch(addToCart(item))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FlightsGrid);

