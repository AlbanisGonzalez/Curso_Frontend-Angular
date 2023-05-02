import { Movie } from "./movie";

export class MovieDatebase {
    movies: Movie[];

    constructor() {
        this.movies = []
    }

    addMovie(movie: Movie) {
        movie.id = this.generateNextId();
        this.movies.push(movie);
    }

    deleteMovieById(id: number) {
        const i = this.movies.findIndex((element) => element.id === id);
        this.movies.splice(i, 1)
    }

    deleteMovieByTitle(title: string) {
        const i = this.movies.findIndex((element) => element.title === title);
        this.movies.splice(i, 1)
    }

    updateRateMovie(id: number, rate: number) {
        this.movies = this.movies.map((element) => {
            if (element.id === id) {
                element.rate = rate;
            }
            return element
        });
    }

    updateGenresMovie(id: number, genre: string) {
        this.movies = this.movies.map((x) => {
            if (x.id === id) {
                x.genres.push(genre);
            }
            return x
        })
    }

    consultMovies() {
        return this.movies;
    }

    generateNextId() {
        let nextId = 0
        for (const movie of this.movies) {
            if (movie.id > nextId) {
                nextId = movie.id;
            }
        }
        return nextId + 1;
    }

}
