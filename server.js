// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')
// used to override methods in form
var methodOverride = require('method-override');


var PORT = process.env.PORT || 3000

var app = express()

app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static("public"))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

var expresshbs = require('express-handlebars')

app.engine('hbs', expresshbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

// var router = require('router')
var routes = require("./controllers/burgers_controller.js")

app.use('/',routes)

// listening port
app.listen(PORT, function (e) {
  if (e) throw e
  console.log("Server listening on: http://localhost:" + PORT)
})
