require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
const dataRoutes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Whitelist for proxy port - DEV SERVER
if (process.env.NODE_ENV === "development") {
  app.use((req, res, next) => {
    const whitelist = ["localhost:3001", "localhost:3000"];
    const host = req.get("host");

    whitelist.forEach((val) => {
      if (host.indexOf(val) > -1) {
        res.setHeader("Access-Control-Allow-Origin", host);
      }
    });

    next();
  });
}

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactgooglebookssearch",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false, }
);

// Use dataRoutes for web & db API calls.
app.use("/api", dataRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
