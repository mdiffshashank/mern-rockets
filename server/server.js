import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";


const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 8000;

var app = express(); //create insrtance of express

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json()); //add middleware to parse the response

app.use(cors()); //add middleware to handle CORS

//custom middleware

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happend .");
    }
    res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
});

// app.use(function (req, res, next) {
//   console.log(
//     ` ${req.method} request for ${req.url} with ${JSON.stringify(req.body)}`
//   );
//   next();
// });

//custom middleware
app.use(express.static(path.resolve(__dirname, "..", "build")));

// app.get("/", function (req, res) {
//   res.send("Loading..........");
// });

app.listen(PORT, function () {
  console.log(`Server is runnig on port ${PORT}`);
});

module.exports = app;


