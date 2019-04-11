//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

const MongoClient = require('mongodb').MongoClient;
const dbName = 'emailDB';
const url = "mongodb+srv://admin-mj:Test123@cluster0-kou5b.mongodb.net/" + dbName;
const myCollection = "emails";
const client = new MongoClient(url, {
  useNewUrlParser: true
});
const connection = client.connect(); // initialized connection

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index-onepage.html", {});
});

app.post("/", function(req, res) {
  const emailPost = {
    name: req.body.senderName,
    email: req.body.senderEmail,
    phone: req.body.senderPhone,
    subject: req.body.senderSubject,
    message: req.body.senderBody,
    date: Date.now()
  };
  const connect = connection;
  connect.then(() => {
    const db = client.db(dbName);
    db.collection(myCollection).insertOne(emailPost);
  });
  res.sendFile(__dirname + "/message.html");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started");
});
