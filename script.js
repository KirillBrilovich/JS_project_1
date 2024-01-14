'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt("How many films have you already watched?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you already watched?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt("One of the last movies you watched?", "").trim(),
                  rateFilm = prompt("How much would you rate it?", "").trim();
        
            if (lastFilm != null && rateFilm != null && lastFilm != '' && rateFilm != '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = rateFilm;
                console.log('Done!');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("You've watched quite a few films");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("You are a classic viewer");
        } else if (personalMovieDB.count >= 30) {
            console.log("You are a film buff");
        } else {
            console.log("Error");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {

        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genre number ${i}`, "");
            if (genre == '' || genre == null) {
                console.log('You entered incorrect data or didnt enter them');
                i-- 
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`My favourite genre #${i+1} is ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};
