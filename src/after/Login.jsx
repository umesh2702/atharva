import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../CSS/Login.css'; // Import the CSS file

const Login = () => {
  const [isLoginSelected, setIsLoginSelected] = useState(true);

  const toggleForm = () => {
    setIsLoginSelected(!isLoginSelected);
  };

  const validatePassword = (password) => {
    // Strong password criteria: minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
    const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    form.classList.add('was-validated');
    // Additional logic for strong password validation
    const passwordField = form.querySelector('#formBasicPassword');
    const password = passwordField.value;
    if (!validatePassword(password)) {
      passwordField.setCustomValidity('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)');
    } else {
      passwordField.setCustomValidity('');
    }
  };

  return (
    <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Card className="bg-dark text-white mx-auto" style={{ maxWidth: '400px', paddingTop: '20px' }}>
            <Card.Header as="h5">{isLoginSelected ? 'Login' : 'Sign Up'}</Card.Header>
            <Card.Body style={{ paddingTop: '0' }}>
              <Form noValidate onSubmit={handleSubmit}>
                {isLoginSelected ? (
                  <>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" minLength="8" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                      Login
                    </Button>
                  </>
                ) : (
                  <>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" minLength="8" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRollNo">
                      <Form.Label>Roll No</Form.Label>
                      <Form.Control type="text" placeholder="Enter Roll No" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                      Sign Up
                    </Button>
                  </>
                )}
              </Form>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-center" style={{ paddingTop: '0px' }}>
              <span className="text-white me-2 mt-2" >
                {isLoginSelected ? "Don't have an account?" : 'Already have an account?'}
              </span>
              <Button variant="link" onClick={toggleForm} className="text-white">
                {isLoginSelected ? 'Sign Up' : 'Login'}
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
