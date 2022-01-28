import React, { useState } from "react";
import { connect } from 'react-redux';
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import modalConfirm from '../../assets/modalConfirm3.png';
import pesos from '../../assets/reserve.png';
import { removeAllCart } from '../../actions/index';

const styleTextForm =
{
  fontFamily: 'Trebuchet MS'
}

const styleText =
{
  fontSize: '25px',
  fontWeight: 'bold',
  color: 'blue', fontFamily: 'Trebuchet MS'
}



function ModalForm(props) {

  //console.log("ModalForm", props);
  const cartListCount = props.acount;
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [validated, setValidated] = useState(false);
  const [inputs, setInputs] = useState({
    Nombre: '',
    Apellido: '',
    Direccion: '',
    Email: ''
  })


  //Modal Pay 
  function handleClose() {
    setInputs({
      Nombre: '',
      Apellido: '',
      Direccion: '',
      Email: ''
    })
    setShow(false);
    setValidated(false);

  }


  //Form


  function handleChange(event) {

    //console.log(event.target);
    const value = event.target.value;
    setDisableButton(value === "");
    setInputs({
      ...inputs,
      [event.target.name]: value
    });

  }

  function handleSend(e) {
    const form = e.currentTarget;
    var nameValue = document.getElementById("formBasicName").value;
    var emailValue = document.getElementById("formBasicEmail").value;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {

      alert("Hola, " + nameValue + " en breve te llegará un correo a: " + emailValue + " para confirmar tu compra! =D ");
      props.removeFromCart((props.cart))
      e.preventDefault();
      handleClose();

      setInputs({
        Nombre: '',
        Apellido: '',
        Direccion: '',
        Email: ''
      })
      
    }

    setValidated(true);

  }


  return (

    <React.Fragment>

      <div>
        <img src={pesos} width="40" height="40" />  {cartListCount > 0 ?
          <Button className={"btn btn-info"} onClick={handleShow}>Reserva Ahora  </Button>
          :
          <Button className={"btn btn-info disabled focus border"} >Reserva Ahora  </Button>
        }
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <img src={modalConfirm} width="60" height="60" />
          <Modal.Title style={styleText} className="center my-cart navbar-brand">Ingresar Datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="create-course-form" noValidate validated={validated} onSubmit={handleSend} style={styleTextForm}>
            <Form.Group controlId="formBasicName" >
              <Form.Label>Nombre </Form.Label>

              <Form.Control
                type="text"
                placeholder="Ingresa tu Nombre"
                name="Nombre"
                value={inputs.Nombre || ''}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Por favor, Ingresa tu Nombre.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label>Apellidos </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tus Apellidos"
                name="Apellido"
                value={inputs.Apellido || ''}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Por favor, Ingresa tus Apellidos.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicCountry">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu Dirección"
                name="Direccion"
                value={inputs.Direccion || ''}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Por favor, Ingresa tu Dirección.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <InputGroup >

                <Form.Control
                  type="text"
                  placeholder="Ingresa tu email"
                  name="Email"
                  value={inputs.Email || ''}
                  onChange={handleChange}
                  required
                />
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control.Feedback type="invalid">
                  Por favor, ingresa tu Correo Electrónico.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Modal.Footer style={styleText} >
              <Button className={'{font-family: Trebuchet MS}}'} variant="danger" onClick={handleClose}>Regresar </Button>
              <Button disabled={disableButton} type="submit" variant="success">Confirmar</Button>
            </Modal.Footer>

          </Form>

        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}


function mapStateToProps(state, props) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: cart => dispatch(removeAllCart(cart))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);