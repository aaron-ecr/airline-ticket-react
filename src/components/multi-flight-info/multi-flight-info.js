import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { DetailLabel } from './../detail-label/detail-label';
import { FlightInfo } from './../flight-info/flight-info';
import { PriceInfo } from './../price-info/price-info';
import { getTimeDifferece } from './../../lib/utils';
import multiFlightLogo from './../../assets/multiflight.png';
import './multi-flight-info.css';
import './../flight-info/flight-info.css';

const MultiFlightLogo = (props) => {
  return <img src={multiFlightLogo} alt="multiple flights logo" width="50" height="50" />
}

const LayoverInfo = (props) => {
  return (
    <p className="layover-info">
      Escala de {props.time}
    </p>
  )  
}

export const MultiFlightInfo = (props) => {

  //console.log("MultiflightInfo", props);
  const { cumulativeFlight: { departureTime, origin, arrivalTime, destination, totalFare, arrivalTimeStamp, departureTimeStamp, dayChange, numOfPassengers }, flights } = props.data;
  const [ showHideLabel, toggleLabel ] = useState('Detalles');
  const timeDiff = arrivalTimeStamp - departureTimeStamp;
  // eslint-disable-next-line no-undef
  let formatPrice = numeral(totalFare);
  return (
    <Card>
      <section className="Flight-info">
        <MultiFlightLogo></MultiFlightLogo>
        <div className="detail-label">
          <h4>Múltiple</h4>
          <a href="javascript:void(0)" onClick={() => toggleLabel( showHideLabel === 'Detalles' ? 'Ocultar' : 'Detalles') }>
            {showHideLabel}
          </a>
        </div>
        <DetailLabel mainText={departureTime} subText={origin} ></DetailLabel>
        <DetailLabel mainText={arrivalTime + (dayChange ? '(+1)': '')} subText={destination} ></DetailLabel>
        <DetailLabel mainText={getTimeDifferece(timeDiff)} subText={'Total Hrs.'} ></DetailLabel>
        <DetailLabel mainText={"Pasajeros"} subText={numOfPassengers} ></DetailLabel>
        <PriceInfo mainText={"Precio Total"} amount={formatPrice.format('$ 0,0')} />
        
      </section>
      { showHideLabel === 'Ocultar' && flights.map((flight, index) => {
        const timeDiff = index < flights.length -1 ? flights[index+1].departureTimeStamp - flight.arrivalTimeStamp : null;
        return (
          <React.Fragment>
            <FlightInfo data={flight} isMultiMode={true} ></FlightInfo>
            {timeDiff && <LayoverInfo time={getTimeDifferece(timeDiff)}></LayoverInfo> }
          </React.Fragment>  
        );
      })}
    </Card>
  )
}
