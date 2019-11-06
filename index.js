// const express = require('express')
// const app = express()

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const PORT = process.env.PORT || 8080

const users = require('./data.json')

app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('home', {menu:'home'})
})

app.get('/api/users', function(req, res){
  // res.send(users)
  res.json(users)
})

app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`)
})
