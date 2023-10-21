const express = require('express')

const { scrapeWebsite } = require('../utils/scraper')
const routesData = require('../db/routes.json')

const router = express.Router()

router.post('/test', async (req, res) => {
    try {
        const { webID } = req.body;
        const route = routesData.find(r => r.id === webID)

        if (!route) {
            return res.status(404).send({ message: "Web ID not found." })
        }

        const scrapedData = await scrapeWebsite(route.url)

        res.json(scrapedData)
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Error processing request." })
    }
})

module.exports = router