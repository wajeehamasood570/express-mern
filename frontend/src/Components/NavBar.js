import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import firebase from '../Config/firebase.js'
export const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [signshow, setSignShow] = useState(false);
  const handleSignClose = () => setSignShow(false);
  const handleSignShow = () => setSignShow(true);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const check = () => {
    firebase.auth().signInWithEmailAndPassword(registerEmail, registerPassword)
        .then((userCredential) => {
          alert('Sign Up successfully!')
        })
        .catch((error) => {
            var errorMessage = error.message;
            alert('Something went wrong ' + errorMessage)
        });

        console.log(loginEmail);
}

const checksign = () => {
  firebase.auth().createUserWithEmailAndPassword(loginEmail, loginPassword)
      .then((userCredential) => {
       
        alert('Login successfully!')


      })
      .catch((error) => {
          var errorMessage = error.message;
          alert('Something went wrong ' + errorMessage)
      });

      console.log(registerEmail);
}





  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'black' }}>
      <Container>
        <Navbar.Brand style={{color:'white'}}>BlogMania 💬</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className="navlink" to={`/`}>Home</Link>
            <br />
            <Link className="navlink" to={`/add`}>Add</Link>
            <br />
            <Link className="navlink" to={`/list`}>List</Link>
           
          </Nav>
          <Nav>
            <Nav.Link className="navlink" onClick={handleSignShow}>Login</Nav.Link>
            <Nav.Link className="navlink" onClick={handleShow}>
              Sign Up
            </Nav.Link>



            <Modal className='modal' show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form className='form' method='POST'>
                  <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                  </Form.Group>

                  <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                  </Form.Group>

                  <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setLoginEmail(e.target.value)} />

                  </Form.Group>


                  <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                </Form>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => { handleClose() ; checksign()}}>
                  Sign Up
                </Button>
              </Modal.Footer>
            </Modal>






            <Modal className='modal1' show={signshow} onHide={handleSignClose}>
              <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form className='form' method='POST'>
                  <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setRegisterEmail(e.target.value)} />

                  </Form.Group>


                  <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                </Form>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleSignClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => { handleSignClose(); check()}}>
                  Sign Up
                </Button>
              </Modal.Footer>
            </Modal>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar