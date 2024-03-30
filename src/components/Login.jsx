import React, { useState } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login({ onLogin }) {
  const history = useNavigate();

  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/login", {
        roll,
        password,
      });

      if (res.status === 200) {
        onLogin();
        history("/", { state: { id: roll } });
        localStorage.setItem("roll", roll);
      } else {
        alert("Invalid roll number or password");
      }
    } catch (error) {
      alert("Error: " + error.message);
      console.log(error);
    }
  }

  return (
    <div className="" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Card className="bg-dark text-white mx-auto" data-aos="zoom-in" data-aos-duration="1000" style={{ maxWidth: '400px', paddingTop: '20px' }}>
            <Card.Header as="h5">Login</Card.Header>
            <Card.Body style={{ paddingTop: '0' }}>
              <Form onSubmit={submit}>
                <Form.Group controlId="formRoll" data-aos="fade-right" data-aos-duration="2000">
                  <Form.Label>Roll Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter roll number"
                    value={roll}
                    onChange={(e) => setRoll(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword" data-aos="fade-left" data-aos-duration="2000">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100" style={{marginTop:'20px'}} data-aos='fade-up' data-aos-duration="2000">
                  Login
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-center" style={{ paddingTop: '0px' }} data-aos="zoom-out" data-aos-duration="2000">
              <span className="text-white me-2 mt-2">Don't have an account?</span>
              <Link to="/signup" className="text-white">Sign Up</Link>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
