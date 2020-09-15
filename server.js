const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

const connectDB = require('./config/db.js')

//Connect to DB
connectDB()

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))

app.get('/', (req,res) => {
    res.send('API is running')
}) 


app.use('/api/users', require('./routes/api/users'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/auth', require('./routes/api/auth'))