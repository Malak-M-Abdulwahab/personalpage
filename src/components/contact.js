import { useState } from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import call from "../images/call.png"
import { useForm } from '@formspree/react';

function Contact(){

    const [state, handleSubmit] = useForm("xpqjzvez");
    const [buttonText, setButtonText] = useState("Send");

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails , setFormDetails] = useState(formInitialDetails);

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const sent = () => {
        setButtonText("Sending...")
        setTimeout(() => {
            setFormDetails(formInitialDetails)
            setButtonText("Send")
        }, 2000);
    }

    return (
        <section className="contact" id="contactme">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={call} alt="Contact"></img>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" id="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate("email", e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate("phone", e.target.value)}></input>
                                </Col>
                                <Col>
                                    <textarea rows={6} id="message" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
                                    <button type="submit" disabled={state.submitting} onClick={sent}><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact