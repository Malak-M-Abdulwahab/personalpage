import { Container, Row, Col } from "react-bootstrap";

function Home(){
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs = {12} md = {6} xl = {7}>
                        <span className="tag-line">I'm Malak Moustafa</span>
                        <h1>{"I love coding!"}</h1>
                        <p>Front-End Developer</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;