"use strict"

var http = require("http")
var url = require("url")
var levelup = require("levelup")

var config = require("../config.json")

var db = levelup(config.db)

var server = http.createServer(function(req, res) {
  var parsedURL = url.parse(req.url)
  
  console.log(parsedURL)

  res.end("")
})

console.log("Starting server.  Listening on port ", config.port)
server.listen(config.port)