import React from 'react';
import Card from 'react-bootstrap/Card';

import { DetailLabel } from '../detail-label/detail-label';
import { PriceInfo } from '../price-info/price-info';
import '../flight-info/flight-info.css';

export const CartFlightInfo = (props) => {

    //console.log("cartFlighInfo", props);

    const {  departureTime, origin, destination, price, numOfPassengers } = props.data;
    const isMultiMode = props.data.cumulativeFlight;

    // eslint-disable-next-line no-undef
    let formatPrice = numeral(price);


    return (
        <Card>
            <section className="Flight-info">

            <DetailLabel mainText={"Directo"} subText={"Sin Escala"} ></DetailLabel>
            <DetailLabel mainText={"Origen"} subText={origin} ></DetailLabel>
            <DetailLabel mainText={"Destino"} subText={destination} ></DetailLabel>
            <DetailLabel mainText={"Horario"} subText={departureTime} ></DetailLabel>
            <DetailLabel mainText={"Pasajeros"} subText={numOfPassengers} ></DetailLabel>
            {isMultiMode ? null : <PriceInfo mainText={"Precio"} amount={formatPrice.format('$ 0,0')} />}
            

            </section>
        </Card>

    );



}


