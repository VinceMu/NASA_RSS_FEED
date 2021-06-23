const NASA_RSS_FEED = "https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss";
const express = require('express')
const RssFeedService = require("./services/rss-feed-service");
const app = express()
const port = 3000

const nasaRssFeed = new RssFeedService(NASA_RSS_FEED);

app.get('/', async (req, res) => {
  const podcast = await nasaRssFeed.buildPodcast();
  res.json(podcast);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})