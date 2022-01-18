import React from "react";
import { Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <div className="Jumbotron">
      <Form>
        <Form.Group className="mb-3" controlId="contact-name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter full name"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="contact-email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group>
          <Form.Group.Text>Enter your message here</Form.Group.Text>
          <Form.Control type="textarea" placeholder="Type message here" aria-label="Message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
