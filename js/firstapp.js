"use strict";

const numberOfFilms=prompt('Сколько фильмов вы уже посмотрели?','');



 const personalMovieDB= {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

// ||

for (let i=1; i<2; i++){

        let a=prompt('Один из последних фильмов?',''),
            b=prompt('На сколько оценете?','');
    if(a !=null && b !=null && a!='' && b!='' && a.length<50 ){
    personalMovieDB.movies[a] = b;
    console.log('done');
 
     }



            
        
}


