import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Shoe1 from "../img/shop-banner.png";

const Contact = () => {
  return (
    <div className='box5'>
        <div className='box6'>
            <h1>CONTACT NOW</h1>
 <Row>
    <Col sm={12} lg={6} className="for1" >


    <Form className='f2'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>NAME</Form.Label>
        <Form.Control type="email" className='f1' placeholder="USER NAME" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>PHONE NUMBER</Form.Label>
        <Form.Control type="email" placeholder="USER NUMBER" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>MASSAGE</Form.Label>
        <Form.Control as="textarea"  />
      </Form.Group>
      <Button className="A2">SENT</Button>
    </Form>

    </Col>
    <Col sm={12} lg={6}>
    
      <img src={Shoe1}  
         height={450} 
         width={510}
      >
      </img>
    </Col>
 </Row>
        </div>
    </div>
  )
}

export default Contact