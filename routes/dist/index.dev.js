"use strict";

var express = require("express");

var router = express.Router();
var messages = [{
  text: "Hi there!",
  user: "Amando",
  added: new Date()
}, {
  text: "Hello World!",
  user: "Charles",
  added: new Date()
}];
/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages
  });
});
router.get("/new", function (req, res, next) {
  res.render("form", {
    title: "Add Message"
  });
});
router.post("/new", function (req, res, next) {
  body = req.body;
  messages.push({
    text: body.message,
    user: body.author,
    added: new Date()
  });
  res.redirect("/");
});
module.exports = router;