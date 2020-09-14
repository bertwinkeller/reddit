const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))

app.get('/', (req,res) => {
    res.send('API is running')
})