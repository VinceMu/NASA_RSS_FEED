const rssParser =  require("rss-parser");
const createEpisode = require("../models/episode");
const createPodcast = require("../models/podcast");

class RssFeedService {
    
    constructor(rssUrl){
        this.provideRssFeed = () => (new rssParser()).parseURL(rssUrl);
    }

    getRssFeed(){
        return this.provideRssFeed();
    }

    async buildPodcast(length=10){
        const parsedFeed = await this.provideRssFeed();
        return createPodcast(
            parsedFeed.title,
            parsedFeed.description,
            parsedFeed.items.slice(0,length).map(item => createEpisode(item.title, item.enclosure.url, item.pubDate))
        )
    }
}

module.exports = RssFeedService;