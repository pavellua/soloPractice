

let numberOfFilms;
start();
function start () {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function detectPersonalLvl () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено слишком мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    }
}



function writeYourGenres () {
    for (let i=0; i<3; i++) {
        personalMovieDB.genres.push (prompt(`Ваш любимій жанр под номером ${i+1}`));
    }
}





// let countFilm = 0;
// do {
//     let lastFilmWatched = prompt('Какой последний фильм посмотрели?');
//     let lastFilmRate = +prompt('Оцените его');
//     if (lastFilmWatched.length != 0 && lastFilmWatched.length < 50 && lastFilmWatched != undefined) {
//         personalMovieDB.movies[lastFilmWatched] = lastFilmRate;
//         personalMovieDB.movies[lastFilmWatched] = lastFilmRate;
//         countFilm++;
//     }
// }
// while (countFilm < 2);
// console.log(personalMovieDB);

function rememberMyFilms () {
    for (let i = 0; i<2; i++) {
        let lastFilmWatched = prompt('Какой последний фильм посмотрели?');
        let lastFilmRate = +prompt('Оцените его');
        if (lastFilmWatched != null && lastFilmWatched.length != 0 && lastFilmWatched.length < 50 ) {
            personalMovieDB.movies[lastFilmWatched] = lastFilmRate;
        }
        else {
            i--;
        }
    }
}


function showMyDB () {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}



rememberMyFilms ();
writeYourGenres ();
showMyDB ();
detectPersonalLvl ();