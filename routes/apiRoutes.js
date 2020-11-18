const router = require("express").Router();
const axios = require("axios");
const apiKey = process.env.BOOKS_API_KEY;


router.get("/web/book/:id", async (req, res, next) => {
  try {
    const query = req.params.id;
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`);
    console.log(response);
    res.json(response.data);
  }
  catch (err) {
    console.error("Error in API Call", err);
  }
})

module.exports = router;