
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilmWatched = prompt('Какой последний фильм посмотрели?');
let lastFilmRate = +prompt('Оцените его');

personalMovieDB.movies[lastFilmWatched] = lastFilmRate;
personalMovieDB.movies[lastFilmWatched] = lastFilmRate;

lastFilmWatched = prompt('Какой последний фильм посмотрели?');
lastFilmRate = +prompt('Оцените его');

personalMovieDB.movies[lastFilmWatched] = lastFilmRate;
personalMovieDB.movies[lastFilmWatched] = lastFilmRate;

console.log(personalMovieDB);