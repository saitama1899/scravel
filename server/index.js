const express = require('express')
const cors = require('cors')
const scrapingRoutes = require('./routes/scrapingRoutes')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use('/api/scraping', scrapingRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

module.exports = app
