const NASA_RSS_FEED = "https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss";
const express = require('express')
const RssFeedService = require("./services/rss-feed-service");
const episodePublishDateComparator = require("./models/episode").episodePublishDateComparator;
const sortOrders = require("./models/sortOrders");

const app = express()
const port = 3000

const nasaRssFeed = new RssFeedService(NASA_RSS_FEED);

app.get('/', async (req, res) => {
  const podcast = await nasaRssFeed.buildPodcast(10);
  res.json(podcast);
})

app.get('/sort', async (req, res) => {
  const ordering = req.query.order;
  if (!sortOrders.includes(ordering)) {
    res.sendStatus(400);
  }
  const sortedPodcast = await nasaRssFeed.buildPodcast(10,
    (episodes) => episodes.sort(episodePublishDateComparator(ordering))
  )
  res.json(sortedPodcast);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})