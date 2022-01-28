import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Typeahead } from 'react-bootstrap-typeahead';
import { connect } from 'react-redux';
import './search-form.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { findFlights } from './../../actions';



const airports = [
  'Ciudad de México (MEX)',
  'España (ESP)',
  'Londres (UK)',
  'Miami (USA)',
  'Monterrey (MEX)',
  'New York (USA)',
  'Ottawa (CAN)'
]

const styleFont = { 
  fontWeight: 'bold', 
  fontSize:'15px',
  color:'#0A1B69',
  
}


const isDate = (date) => {
  return (new Date(date) !== "Dato Inválido") && !isNaN(new Date(date));
}

const ErrorLabel = (props) => {
  return (<label style={{ color: 'red' }}>{props.message}</label>)
}

const disablePastDate = () => {
  const today = new Date();
  const dd = String(today.getDate() + 0).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
};

export const SearchForm = (props) => {
  //console.log("Search-Form-props", props);
  let origin, destination;
  const [isReturn, setFlightType] = useState(false);
  const [status, setFormValid] = useState({ isValid: false });
  let invalidFields = {};
  //const isReturn = true;
  const handleSubmit = (event) => {
    //console.log("Search-Form-event", event);
    event.preventDefault();
    const { flights } = props;
    invalidFields = {};
    const criteria = {
      origin: origin.state.text,
      destination: destination.state.text,
      departureDate: event.target.dateOfDep.value,
      numOfPassengers: event.target.numOfPassengers.value
    }

    //console.log("criteria", criteria);

    if (event.target.flightType[1].checked) {
      criteria.returnDate = event.target.dateOfReturn.value;
      if (!isDate(event.target.dateOfReturn.value)) {
        invalidFields.returnDate = true;
      }
    }

    if (!airports.includes(criteria.origin)) {
      invalidFields.origin = true;
    }
    if (!airports.includes(criteria.destination) || criteria.origin === criteria.destination) {
      invalidFields.destination = true;
    }
    if (!isDate(criteria.departureDate)) {
      invalidFields.departureDate = true;
    }
    if (!isDate(criteria.departureDate)) {
      invalidFields.departureDate = true;
    }
    if (Object.keys(invalidFields).length > 0) {
      setFormValid({ isValid: false, ...invalidFields });
      return;
    }

    setFormValid({ isValid: true });
    props.findFlights({ flights, criteria });
  }




  return (
    <Card>
      <Card.Body>
        <Form className="search-form-container" onSubmit={handleSubmit}>
          <Form.Group >
            <Form.Check
              inline
              checked={!isReturn}
              style={styleFont}
              type="radio"
              label="Sencillo"
              name="flightType"
              id="formHorizontalRadios1"
              onChange={(e) => setFlightType(false)}
            />
            <Form.Check
              inline
              checked={isReturn}
              style={styleFont}
              type="radio"
              label="Redondo"
              name="flightType"
              id="formHorizontalRadios2"
              onChange={(e) => setFlightType(true)}
            />
          </Form.Group>

          <Form.Group controlId="formGridOrigin">
            <Typeahead
              id="origin-flights"
              labelKey="origin"
              options={airports}
              placeholder="Ingrese Origen"
              ref={(ref) => origin = ref}
            />
            {status.origin && <ErrorLabel type="invalid" message="Ingresa un Aeropuerto válido"></ErrorLabel>}
          </Form.Group>

          <Form.Group controlId="formGridDestination">
            <Typeahead
              id="destination-flights"
              labelKey="destination"
              options={airports}
              placeholder="Ingrese Destino"
              ref={(ref) => destination = ref}
            />
            {status.destination && <ErrorLabel type="invalid" message="Por favor ingresa un destino válido"></ErrorLabel>}
          </Form.Group>

          <Form.Group controlId="formGridDateOfDep">
            <Form.Label style={styleFont}>Fecha Salida:</Form.Label>
            <Form.Control  type="date" name="dateOfDep" placeholder="yyyy-mm-dd" min={disablePastDate()} required />
            {status.departureDate && <ErrorLabel message="Por favor ingrese una fecha de origen válida"></ErrorLabel>}
          </Form.Group>

          {isReturn && <Form.Group controlId="formGridDateOfReturn">
            <Form.Label style={styleFont}>Fecha Regreso:</Form.Label>
            <Form.Control  type="date"  name="dateOfReturn" placeholder="yyyy-mm-dd" min={disablePastDate()} required />
            {status.returnDate && <ErrorLabel message="Por favor ingrese una fecha de destino válida"></ErrorLabel>}
          </Form.Group>}

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label style={styleFont}>Número de pasajeros:</Form.Label>
            <Form.Control as="select" name="numOfPassengers" placeholder="Número de pasajeros">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Buscar
          </Button>
        </Form>
      </Card.Body>
    </Card>

  )
}

const mapStateToProps = (state) => ({
  flights: state.flights
})

const mapDispatchToProps = {
  findFlights
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

