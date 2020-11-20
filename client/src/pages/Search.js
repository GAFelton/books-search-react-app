import React, { useState } from "react";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";
import Input from "../components/Input";
import Button from "../components/Button";
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
      const bookObj = {
        id: book.id,
        selfLink: book.selfLink,
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        authors: [book.volumeInfo.authors],
        description: book.volumeInfo.description,
        publisher: book.volumeInfo.publisher,
        publishedDate: book.volumeInfo.publishedDate,
        previewLink: book.volumeInfo.previewLink,
        image: book.volumeInfo.imageLinks.thumbnail,
      };
      output.push(bookObj);
    })
    setBooks(output);
  }
  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    API.web.get(bookSearch)
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
                      key={book.title}
                      title={book.title}
                      href={book.link}
                      ingredients={book.ingredients}
                      thumbnail={book.thumbnail}
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