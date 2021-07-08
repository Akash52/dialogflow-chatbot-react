const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
//Routes
const talkToChatbot = require('./chatbot')
const fulfillmentRoutes = require('./fulfillment')

var jsonParser = express.json()
var urlEncoded = express.urlencoded({ extended: true })
app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send({ Hello: 'Sky' })
})

app.post('/chatbot', jsonParser, urlEncoded, async (req, res) => {
  const message = req.body.message
  console.log('message' + message)

  talkToChatbot(message)
    .then((response) => {
      res.send({ message: response })
    })
    .catch((error) => {
      console.log('Something went wrong: ' + error)
      res.send({
        error: 'Error occured here',
      })
    })
})
app.use(fulfillmentRoutes)

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
