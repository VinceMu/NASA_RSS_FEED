const rssParser = require("rss-parser");
const createEpisode = require("../models/episode").createEpisode;
const createPodcast = require("../models/podcast");
const DATE_FORMAT = "DD/MM/YYYY, h:MM:ss a [AEST]";

class RssFeedService {

    constructor(rssUrl) {
        this.provideRssFeed = () => (new rssParser()).parseURL(rssUrl);
    }

    getRssFeed() {
        return this.provideRssFeed();
    }

    async buildPodcast(length = 10, transformEpisodes = _ => _) {
        const parsedFeed = await this.provideRssFeed();
        return createPodcast(
            parsedFeed.title,
            parsedFeed.description,
            transformEpisodes(
                parsedFeed.items.map(item => createEpisode(item.title, item.enclosure.url, item.pubDate))
            ).slice(0, length)
                .map(episode => ({ ...episode, publishedDate: episode.publishedDate.format(DATE_FORMAT) }))
        )
    }
}

module.exports = RssFeedService;