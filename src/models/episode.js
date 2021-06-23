function createEpisode(title, audioUrl, publishedDate){
    return {
        title:title,
        audioUrl: audioUrl,
        publishedDate: publishedDate
    }
}

module.exports = createEpisode;