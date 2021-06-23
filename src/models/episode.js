const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
const dayjs = require("dayjs");
dayjs.extend(utc);
dayjs.extend(timezone);

const episodePublishDateComparator = (ordering) => (a, b) => {
    if (ordering === "asc") {
        return a.publishedDate.isBefore(b.publishedDate) ? -1 : 1;
    } else {
        return b.publishedDate.isAfter(b.publishedDate) ? -1 : 1;
    }
};

function createEpisode(title, audioUrl, publishedDate) {
    return {
        title: title,
        audioUrl: audioUrl,
        publishedDate: dayjs(publishedDate).tz("Australia/Sydney")
    }
}

module.exports.createEpisode = createEpisode;
module.exports.episodePublishDateComparator = episodePublishDateComparator;

