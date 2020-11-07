'use strict';


let numberOfFiles=+prompt('Сколько фильмов Вы уже посмотрели?', '');


let personalMovieDb={
    count:numberOfFiles,
    movies:{},
    actors:{},
    genres:[],
    private:false,

};


let a=prompt('Один из последних фильмов?', '');
let b=prompt('На сколько оцените его?', '');
let c=prompt('Один из последних фильмов?', '');
let d=prompt('На сколько оцените его?', '');

personalMovieDb.movies[a]=b;
personalMovieDb.movies[c]=d;

console.log(personalMovieDb);

