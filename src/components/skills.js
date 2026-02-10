import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import per90 from '../images/html90suffix.png'
import per95 from '../images/html95suffix.png'
import per92 from '../images/html92suffix.png'
import per85 from '../images/html85suffix.png'
import per10 from '../images/html10suffix.png'
import per65 from '../images/html65suffix.png'
import per88 from '../images/html88suffix.png'

function Skills(){
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };  
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>Skills</h2>
                        <p>Striving to achieve perfection in every aspect</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider' style={window.screen.width >= 768 ? {width: "80%"} : {width: "100%"}}>
                        <div className='item'>
                            <img src={per95} alt='95 percent'></img>
                            <h5>HTML</h5>
                        </div>
                        <div className='item'>
                            <img src={per88} alt='88 percent'></img>
                            <h5>CSS</h5>
                        </div>
                        <div className='item'>
                            <img src={per90} alt='90 percent'></img>
                            <h5>JavaScript</h5>
                        </div>
                        <div className='item'>
                            <img src={per85} alt='85 percent'></img>
                            <h5>React.js</h5>
                        </div>
                        <div className='item'>
                            <img src={per10} alt='10 percent'></img>
                            <h5>Node.js</h5>
                        </div>
                        <div className='item'>
                            <img src={per92} alt='92 percent'></img>
                            <h5>SQL</h5>
                        </div>
                        <div className='item'>
                            <img src={per65} alt='65 percent'></img>
                            <h5>PHP</h5>
                        </div>
                        <div className='item'>
                            <img src={per88} alt='88 percent'></img>
                            <h5>Java</h5>
                        </div>
                        <div className='item'>
                            <img src={per92} alt='92 percent'></img>
                            <h5>C/C++</h5>
                        </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills;