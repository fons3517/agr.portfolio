import React from "react";
import projects from "./projects.json";
import { Card } from "react-bootstrap"
function Portfolio() {
  return (<div className="d-flex flex-wrap">
    {projects.map(project => (<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
      </Card.Body>

      <Card.Body>
        <Card.Link href={project.github}>Github</Card.Link>
        <Card.Link href={project.site}>Application Link</Card.Link>
      </Card.Body>
    </Card>))}

  </div>

  );
}

export default Portfolio;
