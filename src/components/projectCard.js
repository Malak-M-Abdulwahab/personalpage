import { Col } from "react-bootstrap";


const ProjectCard = ({title, description, imgURL, siteURL}) => {
    return(
        <Col>
            <div className="proj-imgbx">
                <img src={imgURL} alt="project"></img>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <a href={siteURL}>Visit site</a>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;