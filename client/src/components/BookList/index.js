import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col, ListGroup, Form } from "react-bootstrap";

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ListGroup>{children}</ListGroup>;
}

// BookListItem renders a bootstrap list item containing data from the book api call
export function BookListItem({
  authors,
  description,
  image,
  link,
  title,
  checkbox
}) {
  return (
    <ListGroup.Item>
      <Container>
        <Row>
          {checkbox ? (
            <Col xs={1}>
            <Form.Check aria-label={`Save option: ${title}`} onClick={checkbox} />
            </Col>
          ) : (
            " "
          )}
          <Col xs={4} sm={2}>
            <Thumbnail src={image || "https://placehold.it/300x300"} />
          </Col>
          <Col xs={8} sm={9}>
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>By: {authors}</p>
            <a rel="noreferrer noopener" target="_blank" href={link}>
              Go to book!
            </a>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
}
