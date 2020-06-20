import express from 'express'

import * as scrapingHinatazaka46 from './scraping_hinatazaka46'

const app = express()

app.get('/', async (req, res) => {
    const data = await scrapingHinatazaka46.main()
    res.status(200).send(data)
})

app.listen(3000, () => console.log('http://localhost:3000/'))