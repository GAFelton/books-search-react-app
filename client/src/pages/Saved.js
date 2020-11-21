import React, { useState, useEffect } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(async () => {
    loadBooks();
  }, []);

  async function loadBooks() {
    try {
      const response = await API.server.searchDB();
      setBooks(response);
    } catch (error) {
      console.log(error);
    }
  };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
      API.server.delete(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }

    function handleBookLinkClick() {

    }

  return (
    <>
      <Container>
        <Row>
          <Col className="bookDisplayArea">
          </Col>
          <Col className="sideboard">
            {books.length ? (
              <ListGroup>
                {books.map(book => {
                  return (
                    <ListGroup.Item key={book._id}>
                      <a onClick={handleBookLinkClick}>
                        <strong>
                          {book.title} by {book.authors[0]}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => deleteBook(book._id)} />
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            ) : (
                <h3>No Results to Display</h3>
              )}

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Saved;
