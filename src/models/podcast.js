function createPodcast(title, description, episodes){
    return {
        title: title,
        description: description,
        episodes:episodes
    }
}

module.exports = createPodcast;