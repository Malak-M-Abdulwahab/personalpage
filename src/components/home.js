import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import bannerFlower1 from "../images/bannerFlower1.png";
import bannerFlower2 from "../images/bannerFlower2.png";

function Home(){
    const [loopNumber, setLoopNumber] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [period, setPeriod] = useState(110)
    const toRotate = ["Web Developer ", "Front-End Developer ", "Back-End Developer ", "FullStack Developer "]
    const [text, setText] = useState("")

    useEffect(() => {
        const tick = () => {
        const i = loopNumber % toRotate.length;
        const fullText = toRotate[i];

        setText((prevText) => {
            const updatedText = isDeleting ? fullText.substring(0, prevText.length - 1) : fullText.substring(0, prevText.length + 1);
            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setPeriod(50)
            } else if (isDeleting && updatedText === "") {
                setIsDeleting(false);
                setLoopNumber(loopNumber + 1);
                setPeriod(150)
            }
            return updatedText;
            });
        };

        let ticker = setInterval(tick, period);

        return () => {
            clearInterval(ticker)
        }
    }, [loopNumber, isDeleting, toRotate])

    return(
        <section className="banner" id="home">
            <Container fluid>
                <Row className="align-items-center">
                    <Col xs = {1} md = {1} xl = {1}>
                        <img className="flower1" src={bannerFlower1} alt="Flower 1"></img>
                        <img className="flower2" src={bannerFlower2} alt="Flower 2"></img>
                    </Col>
                    <Col xs = {1} md = {1} xl = {1}>
                    </Col>
                    <Col xs = {8} md = {8} xl = {8}>
                        <h1>{"Hi! I'm Malak Moustafa, "}</h1>
                        <span className="wrap">{text}</span>
                        <p>Passionate about creating beautiful and productive platforms</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;