// const express = require('express')
// const app = express()

// ngambil modul express
const express = require('express')
const app = express()

// ngambil ejs layout
const expressLayouts = require('express-ejs-layouts')

// settng port online atau ofline
const PORT = process.env.PORT || 8080

// ini bagian untuk requaire data json
const users = require('./data.json')

// membuat view , ngambil expresslayout dan set view
app.use(expressLayouts)
app.set('view engine', 'ejs')

// agar node_moduls tidak terbaca oleh guest jadi hanya bisa mengakses direktori /public
app.use(express.static(__dirname + '/public'))


// route untuk home
app.get('/', (req, res) => {
  res.render('home', {menu:'home'})
})

// route untuk about
app.get('/about', (req, res) => {
  res.render('about', {menu:'about'})
})

// route untuk contact
app.get('/contact', (req, res) => {
  res.render('contact', {menu:'contact'})
})

// bagian ini untuk nampilin respon ke layar dalam bentuk json
app.get('/api/users', function(req, res){
  // res.send(users)
  res.json(users)
})

// ini untuk menjalankan portnya
app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`)
})
