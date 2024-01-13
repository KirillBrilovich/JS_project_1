let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you already watched?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you already watched?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt("One of the last movies you watched?", ""),
            rateFilm = prompt("How much would you rate it?", "");
    
        if (lastFilm != null && rateFilm != null && lastFilm != '' && rateFilm != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = rateFilm;
            console.log('Done!');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("You've watched quite a few films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are a classic viewer");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are a film buff");
    } else {
        console.log("Error");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i}`, "");
    }
}

writeYourGenres();