import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the book api call
export function BookListItem({
  authors,
  description,
  image,
  link,
  title
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image || "https://placehold.it/300x300"} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>By: {authors}</p>
            <a rel="noreferrer noopener" target="_blank" href={link}>
              Go to book!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
