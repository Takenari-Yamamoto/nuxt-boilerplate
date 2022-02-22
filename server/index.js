// 参考
// https://reffect.co.jp/node-js/express-js%E3%81%A7json-web-tokenjwt%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%82%92%E8%A1%8C%E3%81%86
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const port = 5000

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

app.get('/', (request, response) => response.send('Hello World!!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

mongoose.connect(
  'mongodb://takenari:abc@cluster0-shard-00-00.dfedf.mongodb.net:27017,cluster0-shard-00-01.dfedf.mongodb.net:27017,cluster0-shard-00-02.dfedf.mongodb.net:27017/authTable?ssl=true&replicaSet=atlas-8x2pda-shard-0&authSource=admin&retryWrites=true&w=majority',
  options
)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'DB connection error:'))
db.once('open', () => console.log('DB connection successful'))

// 追記

const User = require('./models/User')
const bcrypt = require('bcrypt')
const saltRounds = 10

app.use(express.json())
app.get('/api/user', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    console.log(err)
  }
})

app.post('/api/auth/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)

    const newUser = await new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    })

    const savedUser = await newUser.save()

    res.json(savedUser)
  } catch (err) {
    console.log(err)
  }
})

app.post('/api/auth/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) res.json({ message: 'user not found' })

    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) res.json({ message: 'password not correct' })

    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
    }

    const token = jwt.sign(payload, 'secret')

    res.json({ token })
  } catch (err) {
    console.log(err)
  }
})

app.get('/api/auth/user/', async (req, res) => {
  try {
    const bearToken = await req.headers['authorization']
    const bearer = await bearToken.split(' ')
    const token = await bearer[1]

    const user = await jwt.verify(token, 'secret')
    res.json({ user })
  } catch (err) {
    res.sendStatus(403)
  }
})
