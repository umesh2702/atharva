import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Signup() {
  const history = useNavigate();

  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [semester, setSemester] = useState('');
  const [batch, setBatch] = useState('');

  async function submit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('http://localhost:8000/signup', {
        name,
        roll,
        email,
        phoneNumber,
        password,
        semester,
        batch,
      });

      if (res.status === 201) {
        history('/login', { state: { id: email } });
      } else {
        alert('User already exists');
      }
    } catch (error) {
      alert('Error: ' + error.message);
      console.log(error);
    }
  }

  return (
    <div className=""  style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Card className="bg-dark text-white mx-auto" style={{ maxWidth: '400px', paddingTop: '20px' }}>
            <Card.Header as="h1">Signup</Card.Header>
            <Card.Body>
              <Form onSubmit={submit}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicRoll">
                  <Form.Label>Roll Number</Form.Label>
                  <Form.Control type="text" value={roll} onChange={(e) => setRoll(e.target.value)} placeholder="Roll Number" />
                </Form.Group>
                <Form.Group controlId="formBasicPhoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group controlId="formBasicBatch">
                  <Form.Label>Select Batch</Form.Label>
                  <Form.Control as="select" value={batch} onChange={(e) => setBatch(e.target.value)}>
                    <option value="">Select Batch</option>
                    {[...Array(12)].map((_, index) => (
                      <option key={index} value={2020 + index}>{2020 + index}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicSemester">
                  <Form.Label>Select Semester</Form.Label>
                  <Form.Control as="select" value={semester} onChange={(e) => setSemester(e.target.value)}>
                    <option value="">Select Semester</option>
                    {[...Array(8)].map((_, index) => (
                      <option key={index} value={index + 1}>Sem {index + 1}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-center" style={{ paddingTop: '0px' }}>
              <span className="text-muted me-2 mt-2">Already have an account?</span>
              <Link to="/login" className="text-primary">Login</Link>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Signup;
