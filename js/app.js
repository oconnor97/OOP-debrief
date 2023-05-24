class Disney {
    constructor(movies, tvShows, documentaries, studios){
        this.movies = movies;
        this.tvShows = tvShows;
        this.documentaries = documentaries;
        this.studios = studios;
    }
}

class Showtime extends Disney{
    constructor(movies, tvShows, documentaries, studios, fights){
        super(movies, tvShows, documentaries, studios);
        this.fights =[];
    }
    sport(boxing){
        this.fights.push(boxing);
    }
}


class Hulu extends Disney{
    constructor(movies, tvShows, documentaries, studios, liveTv) {
        super(movies, tvShows, documentaries, studios);
        this.liveTv = liveTv;
    }
}


