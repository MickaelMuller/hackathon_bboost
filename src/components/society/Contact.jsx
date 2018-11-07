import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Modal, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';
import './Contact.css';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle(e) {
        e.preventDefault();
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className="contact-div" >
                <Container>
                    <h2 className="contact-title">Nous contacter</h2>
                    <Row className="contact-pos">
                        <Col lg="6">
                            <Form onSubmit={this.toggle}>
                                <FormGroup>
                                    <Input type="text" name="Nom" id="exampleNom" placeholder="MARTIN"
                                    />
                                    <br />
                                    <Input type="text" name="prenom" id="examplePrenom" placeholder="Bernard" />
                                    <br />
                                    <Input type="email" name="email" id="exampleEmail" placeholder="bernardmartin@gmail.com" required />
                                    <br />
                                    <Input
                                        type="textarea"
                                        name="description"
                                        placeholder="Votre message"
                                    />
                                </FormGroup>
                                <Button className="btn">Envoyer</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                                    <ModalBody>
                                        Votre message a bien été envoyé. Nous reviendrons vers vous très prochainement.
                                </ModalBody>
                                    <ModalFooter>
                                        <Button color="btn" onClick={this.toggle}>OK</Button>{' '}
                                    </ModalFooter>
                                </Modal>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;