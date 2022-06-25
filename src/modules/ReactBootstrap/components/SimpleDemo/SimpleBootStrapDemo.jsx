import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';


const SimpleBootStrapDemo = () => {
    return (
        <div>
            <Container>
            <Form>
                <Row>
                    <Col md>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="example@gmail.com" />
                        <Form.Text className="text-muted">
                            We will never share your email address, trust us!
                        </Form.Text>
                </Form.Group>
                    </Col>
                    <Col md>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" />
                        <Button variant="secondary">LogIn</Button>
                </Form.Group>
                    </Col>
                </Row>
            </Form>
            <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
                <Card.Body>
                    <Card.Title>
                        Card Example
                    </Card.Title>
                    <Card.Text>
                        This is an example of react bootstrap
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            <Breadcrumb>
                <Breadcrumb.Item>Test 1</Breadcrumb.Item>
                <Breadcrumb.Item>Test 2</Breadcrumb.Item>
                <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
            </Breadcrumb>
            <Alert variant="success">This is a button</Alert>
            <Button>Test button</Button>
            </Container>
        </div>
    )
}

export default SimpleBootStrapDemo;
