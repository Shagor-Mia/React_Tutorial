import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
export default function ReactBootstrap() {
  return (
    <Card style={{ width: "18rem" }} className="p-1">
      <Card.Img
        variant="top"
        src="https://images.freeimages.com/images/large-previews/c0d/gerbera-series-1-1486599.jpg?fmt=webp&h=350"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
