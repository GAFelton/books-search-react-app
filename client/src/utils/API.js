import axios from "axios";


// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the book api for
const server = {
  getBooks: function(query) {
    return axios.get("/api/books", { params: { q: query } });
  },
};

const web = {

};

export default {
  server,
  web
};
