import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"

function Footer(){
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <h2>Portfolio</h2>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon footer-socials">
                            <a href="https://github.com/Malak-M-Abdulwahab"><img src={github} alt='GitHub' className='socialLogo'></img></a>
                            <a href="www.linkedin.com/in/malak-m-abdelwahab"><img src={linkedin} alt='LinkedIn' className='socialLogo'></img></a>
                            <a href="https://www.instagram.com/malakk_loki/"><img src={instagram} alt='Instagram' className='socialLogo'></img></a>
                            <a href="https://www.facebook.com/profile.php?id=100011692901438"><img src={facebook} alt='FaceBook' className='socialLogo'></img></a>
                        </div>
                        <p>--© CopyRight 2026-- All Rights Reserved Here By Malak Moustafa Abdulwahab</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;