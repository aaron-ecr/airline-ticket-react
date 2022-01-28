import React from 'react';
import './flight-search-info.css';

export const FlightSearchInfo = (props) => {
  //console.log("FlightSearchInfo", props);
  const { origin, destination, date } = props.criteria;
  return (
    <section className="flight-search-info">
      <h3>{`${origin} - ${destination}`}</h3>
      <p className={`color-found ${props.count > 0 ? 'color-ok' : ''}`}>{props.count} Vuelos encontrados, {date}</p>
    </section>
  )
}