"use strict";

const numberOfFilms=prompt('Сколько фильмов вы уже посмотрели?','');





//        personalMovieDB.movies[a] = b;
//        personalMovieDB.movies[c] = d;

//        console.log(personalMovieDB);
// const a=prompt('Один из последних фильмов?',''),
//       b=prompt('На сколько оценете?',''), 
//       c=prompt('Один из последних фильмов?',''),
//       d=prompt('На сколько оценете?','');

const personalMovieDB= {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};


for(let i=1; i<=4; i++){

    if(i===1){
        let a=prompt('Один из последних фильмов?','');
        }else if('a'==0){
            prompt('Один из последних фильмов?','');
            }

            console.log('a');
}