import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import me from '../images/meBanner.png'

function About(){
    return (
        <section className='aboutme' id='aboutme'>
            <Container>
                <Row>
                    <Col>
                        <h2>About Me</h2>
                        <img src={me} alt='malak moustafa'></img>
                        <p>I am a 4th year student at University of Alexandria, Faculty of Engineering, currently majoring in Computer and Communications engineering.
                            My mission is to prove that femininity doesn't get in the way of professionalism, but strengthens it into a more complete and whole concept that's inclusive and balanced.<br />
                            I am passionate about making platforms that are easy on the eyes, as well as productive and useable.
                            My skills continue to grow and I always look for more opportunities to improve and become not just a better developer, but a better person as well.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;