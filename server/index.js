"use strict"

var http = require("http")
var url = require("url")
var levelup = require("levelup")

var config = require("../config.json")

var db = levelup(config.db)

var server = http.createServer(function(req, res) {
  //var parsedURL = url.parse(req.url)
  console.log(req.url)

})

server.listen(db.port)