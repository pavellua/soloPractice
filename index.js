

let numberOfFilms;
// start();
function start () {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
    }
}



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
        let answer = prompt(`Ваш любимій жанр под номером ${i+1}`);
        


        if (answer == undefined ||answer == '' ) {
            
            i--;
        }
        else {
            personalMovieDB.genres.push (answer);
        }
    }
    personalMovieDB.genres.forEach( (el,i)=> {
        console.log(`Любимый жанр №${i+1} ${el}`);
    });
}
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


function toggleVisibleMyDB () {
    (!personalMovieDB.privat) ? personalMovieDB.privat=true : personalMovieDB.privat=false;
}




const personalMovieDB = {};
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;
personalMovieDB.start = start;
personalMovieDB.detectPersonalLvl = detectPersonalLvl;
personalMovieDB.rememberMyFilms = rememberMyFilms;
personalMovieDB.showMyDB = showMyDB;
personalMovieDB.writeYourGenres = writeYourGenres;
personalMovieDB.toggleVisibleMyDB = toggleVisibleMyDB;

