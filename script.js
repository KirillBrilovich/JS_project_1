const numberOfFilms = +prompt("How many films have you already watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// const lastFilm_1 = prompt("One of the last movies you watched?", "");
// const rateFilm_1 = prompt("How much would you rate it?", "");
// const lastFilm_2 = prompt("One of the last movies you watched?", "");
// const rateFilm_2 = prompt("How much would you rate it?", "");

const lastFilm_1 = prompt("One of the last movies you watched?", ""),
    rateFilm_1 = prompt("How much would you rate it?", ""),
    lastFilm_2 = prompt("One of the last movies you watched?", ""),
    rateFilm_2 = prompt("How much would you rate it?", "");

personalMovieDB.movies[lastFilm_1] = rateFilm_1;
personalMovieDB.movies[lastFilm_2] = rateFilm_2;

console.log(personalMovieDB);