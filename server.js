const express = require('express')

const app = express()
 

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "can you see this?"
    })
})


app.listen(8080, () => {
    console.log('server running on port 8080')
})