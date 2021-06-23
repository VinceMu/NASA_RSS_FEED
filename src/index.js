const NASA_RSS_FEED = "https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss";
const express = require('express')
const RssFeedService = require("./services/rss-feed-service");
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})