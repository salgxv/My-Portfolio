import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard({ title, image, github, demo }) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img variant="top" src={image} alt={`${title} screenshot`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="d-flex justify-content-between">
          <Button variant="dark" href={github} target="_blank">
            GitHub
          </Button>
          <Button variant="primary" href={demo} target="_blank">
            Live Demo
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;