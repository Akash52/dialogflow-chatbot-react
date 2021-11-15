const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

//Routes
const talkToChatbot = require('./chatbot')
const fulfillmentRoutes = require('./fulfillment')

let jsonParser = express.json()
let urlEncoded = express.urlencoded({ extended: true })
app.use(cors())
app.use(morgan('dev'))

app.post('/chatbot', jsonParser, urlEncoded, async (req, res) => {
  const message = req.body.message
  //console.log('message' + message)

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

// app.use(express.static(path.join(__dirname, '../build')))
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build'))
// })

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
