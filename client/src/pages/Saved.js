import React, { useState, useEffect } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { BookListItem } from "../components/BookList";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";

function Saved() {
  const [books, setBooks] = useState([]);
  const [displayBook, setDisplayBook] = useState({});

  useEffect(async () => {
    await loadBooks();
  }, []);

  async function loadBooks() {
    try {
      const response = await API.server.searchDB();
      await setBooks(response.data);
      await setDisplayBook(books[0]);
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

  function findBookInState(id) {
    return books.filter(item => {
      return item.key === id;
    });
  };

  function handleBookLinkClick(key) {
    const bookToDisplay = findBookInState(key);
    setDisplayBook(bookToDisplay);
  }

  return (
    <>
      <Container>
        <Row>
          <Col xs={9} className="bookDisplayArea">
            {displayBook ? (
              <div>
                <h1>This Book: {displayBook.title}</h1>
                <BookListItem
                  key={displayBook.key}
                  title={displayBook.title}
                  authors={displayBook.authors}
                  link={displayBook.previewLink}
                  description={displayBook.description}
                  image={displayBook.image}
                />
              </div>
            ) : (
                " "
              )}
          </Col>
          <Col xs={3} className="sideboard">
            <h2>Saved Books:</h2>
            {books.length ? (
              <ListGroup>
                {books.map(book => {
                  return (
                    <ListGroup.Item key={book._id}>
                      <a onClick={() => handleBookLinkClick(book.key)}>
                        <strong>
                          {book.title} by {book.authors}
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
