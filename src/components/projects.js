import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import proj1 from "../images/proj1.png"
import proj2 from "../images/proj2.png"
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import ProjectCard from "./projectCard";

function Projects(){
    const projects = [
        {
            title: "Perfume homepage",
            description: "Introductory page describing a perfume store",
            imgURL: proj1,
            siteURL: "https://malak-m-abdulwahab.github.io/webProject1/"
        },
        {
            title: "Perfume E-store",
            description: "Store page for viewing and buying perfumes",
            imgURL: proj2,
            siteURL: "https://malak-m-abdulwahab.github.io/webProject2/Main-Page.html"
        }
    ]
    // add new projects here:

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>A display of how I've improved my skills over time</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className='tab-pane-projects'>
                                    <Row>
                                        <ProjectCard {...projects[0]} />
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className='tab-pane-projects'>
                                        <ProjectCard {...projects[1]} />
                                </Tab.Pane>
                                {/* make a new tab.pane with the project number and go to css */}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects;