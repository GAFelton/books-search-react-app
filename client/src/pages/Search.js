import React, { useState } from "react";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col, Button } from "react-bootstrap";
import Input from "../components/Input";
import API from "../utils/API";

function Search() {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setBookSearch(value);
  };
  const interpretData = (data) => {
    const output = [];
    data.map(book => {
      const bookObj = {};
      bookObj.bookId = book.id,
      bookObj.selfLink = book.selfLink,
      bookObj.title = book.volumeInfo.title,
      bookObj.subtitle = book.volumeInfo.subtitle,
      bookObj.authors = [book.volumeInfo.authors],
      bookObj.description = book.volumeInfo.description,
      bookObj.publisher = book.volumeInfo.publisher,
      bookObj.publishedDate = book.volumeInfo.publishedDate,
      bookObj.previewLink = book.volumeInfo.previewLink,
      bookObj.image = book.volumeInfo.imageLinks.thumbnail,
      
      output.push(bookObj);
    })
    setBooks(output);
  }
  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    API.web.getBooks(bookSearch)
      .then(res => interpretData(res.data.items))
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <Row>
        <Col size="md-12">
          <form>
            <Container>
              <Row>
                <Col size="xs-9 sm-10">
                  <Input
                    name="BookSearch"
                    value={bookSearch}
                    onChange={handleInputChange}
                    placeholder="Search For a Book"
                  />
                </Col>
                <Col size="xs-3 sm-2">
                  <Button
                    onClick={handleFormSubmit}
                    type="success"
                    className="input-lg"
                  >
                    Search
                    </Button>
                </Col>
              </Row>
            </Container>
          </form>
        </Col>
      </Row>
      <Row>
        <Col size="xs-12">
          {!books.length ? (
            <h1 className="text-center">No Books to Display</h1>
          ) : (
              <BookList>
                {books.map(book => {
                  return (
                    <BookListItem
                      key={book.bookId}
                      title={book.title}
                      authors={book.authors}
                      link={book.previewLink}
                      description={book.description}
                      image={book.image}
                    />
                  );
                })}
              </BookList>
            )}
        </Col>
      </Row>
    </Container>
  )
}

export default Search;