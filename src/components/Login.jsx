import React, { useState } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login({onLogin}) {
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
        history("/", { state: { id: roll } });
        onLogin()
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
          <Card className="bg-dark text-white mx-auto" style={{ maxWidth: '400px', paddingTop: '20px' }}>
            <Card.Header as="h5">Login</Card.Header>
            <Card.Body style={{ paddingTop: '0' }}>
              <Form onSubmit={submit}>
                <Form.Group controlId="formRoll">
                  <Form.Label>Roll Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter roll number"
                    value={roll}
                    onChange={(e) => setRoll(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-center" style={{ paddingTop: '0px' }}>
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