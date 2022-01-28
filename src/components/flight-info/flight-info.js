import React from 'react';
import Card from 'react-bootstrap/Card';

import { DetailLabel } from './../detail-label/detail-label';
import { PriceInfo } from './../price-info/price-info';
import nonStopFlightLogo from './../../assets/nonstop.png';
import { getTimeDifferece } from './../../lib/utils';
import './flight-info.css';

const FlightLogo = (props) => {
  return <img src={nonStopFlightLogo} width="50" height="50"></img>
}


export const FlightInfo = (props) => {

  //console.log("FlightInfo-props", props);
  const { name, flightNo, departureTime, origin, arrivalTime, destination, price, date, numOfPassengers  } = props.data;
  const isMultiMode = props.isMultiMode;
  const timeDiff = new Date(`${date} ${arrivalTime}`) - new Date(`${date} ${departureTime}`);
  // eslint-disable-next-line no-undef
  let formatPrice = numeral(price);

  return (
    <Card>
      <section className={`Flight-info ${isMultiMode ? 'gray-background' : ''}`}>
        <FlightLogo></FlightLogo>
        <DetailLabel mainText={name} subText={flightNo} ></DetailLabel>
        <DetailLabel mainText={departureTime} subText={origin} ></DetailLabel>
        <DetailLabel mainText={arrivalTime} subText={destination} ></DetailLabel>
        <DetailLabel mainText={getTimeDifferece(timeDiff)} subText={isMultiMode ? '' : 'Sin escala'} ></DetailLabel>
        <DetailLabel mainText={isMultiMode ? '' : 'Pasajeros'} subText={numOfPassengers} ></DetailLabel>
        {isMultiMode ? null : <PriceInfo mainText={"Precio Total"} amount={formatPrice.format('$ 0,0')} />}
        
      </section>
    </Card>
  )
}