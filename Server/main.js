const express = require('express')
const destinationRouter = require('./routers/destinationRouter')
const flightRouter = require('./routers/flightRouter')
const bookingRouter = require('./routers/bookingRouter')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./configs/database')

app.use('/api/destinations', destinationRouter)
app.use('/api/flights', flightRouter)
app.use('/api/bookings', bookingRouter)

app.listen(process.env.PORT || 8000)
