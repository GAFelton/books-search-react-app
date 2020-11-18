import React, { useState } from "react";
import { BookList, BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";
import Input from "./components/Input";
import Button from "./components/Button";

function Search() {
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
                      href={book.href}
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