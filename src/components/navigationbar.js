import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"

function NavigationBar() {
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const updateActiveLink = (value) => {
        setActiveLink(value)
    }
  return (
    <>
        <Navbar className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">Welcome,</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => updateActiveLink("home")}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => updateActiveLink("skills")}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => updateActiveLink("projects")}>Projects</Nav.Link>
                    <Nav.Link href="#aboutme" className={activeLink === "aboutme" ? "active navbar-link" : "navbar-link"} onClick={() => updateActiveLink("aboutme")}>About Me</Nav.Link>
                    <Nav.Link href="#contactme" className={activeLink === "contactme" ? "active navbar-link" : "navbar-link"} onClick={() => updateActiveLink("contactme")}>Contact Me</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon" style={window.screen.width >= 992 ? {opacity: 1} : {opacity: 0}}>
                        <a href="https://github.com/Malak-M-Abdulwahab"><img src={github} alt='GitHub' className='socialLogo'></img></a>
                        <a href="www.linkedin.com/in/malak-m-abdelwahab"><img src={linkedin} alt='LinkedIn' className='socialLogo'></img></a>
                        <a href="https://www.instagram.com/malakk_loki/"><img src={instagram} alt='Instagram' className='socialLogo'></img></a>
                        <a href="https://www.facebook.com/profile.php?id=100011692901438"><img src={facebook} alt='FaceBook' className='socialLogo'></img></a>
                    </div>
                </span>
            </Container>
        </Navbar>
    </>
  );
}

export default NavigationBar;