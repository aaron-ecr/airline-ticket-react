import React from 'react';
import Card from 'react-bootstrap/Card';

import { DetailLabel } from '../detail-label/detail-label';
import { PriceInfo } from '../price-info/price-info';
import '../flight-info/flight-info.css';

export const CartMultInfo = (props) => {

    //console.log("CartMultInfo", props.data);
    const { arrivalTime, origin, destination, totalFare, numOfPassengers } = props.data;
    //const isMultiMode = props.data.cumulativeFlight;

    // eslint-disable-next-line no-undef
    let formatPrice = numeral(totalFare);


    return(


        <Card>
        <section className="Flight-info">

        <DetailLabel mainText={"Múltiple"} subText={"Escala"} ></DetailLabel>
        <DetailLabel mainText={"Origen"} subText={origin} ></DetailLabel>
        <DetailLabel mainText={"Destino"} subText={destination} ></DetailLabel>
        <DetailLabel mainText={"Horario"} subText={arrivalTime} ></DetailLabel>
        <DetailLabel mainText={"Pasajeros"} subText={numOfPassengers} ></DetailLabel>
        <PriceInfo mainText={"Precio"} amount={formatPrice.format('$ 0,0')} />
        

        </section>
    </Card>

    );
}

