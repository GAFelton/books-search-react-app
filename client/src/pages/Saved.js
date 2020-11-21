import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(async () => {
    loadBooks();
  })

  function loadBooks() {
    try {
      const response = await API.server.searchDB();
      setBooks(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>

    </>
  );
};

export default Saved;
