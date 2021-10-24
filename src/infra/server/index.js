const express = require('express')
const logger = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const routes = require('../../application/client/modules/reliability/infra/http/routes')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(logger('dev'))

app.get('/health-check', (req, res) => {
  res.status(200).send("You can check my reliability at any moment 😉")
})

app.use(routes)

app.listen(process.env.PORT || 3004, () => {
  console.log('Reliabilities service is ready ✅');
});
