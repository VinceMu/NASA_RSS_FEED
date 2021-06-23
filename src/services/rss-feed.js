const rssParser =  require("rss-parser");
const createEpisode = require("../models/episode");

class RssFeed {
    
    constructor(rssUrl){
        this.provideRssFeed = (rssUrl) => (new rssParser()).parseURL(rssUrl);
    }
}