// 1.
// console.log(hello);                                   
// var hello = 'world';                                 

// // var hello;
// // console.log(hello); 
// // hello = 'world'; undefined 

// 2.
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// // var needle;
// // function test();
// // needle = 'haystack';
// // test();
// // test(){
// //     var needle;
// //     needle = 'magnet';
// //     console.log(needle);
// // } magnet

// 3.
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);


// // var brendan;
// // function print();
// // brendan = 'super cool';
// // print(){
// //     brendan = 'only okay';
// //     console.log(brendan);
// // }
// // console.log(brendan); super cool


// 4.
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// // var food;
// // function eat(){
// //     var food;
// //     food = 'half-chicken';
// //     console.log(food);
// //     food = 'gone';
// // } 
// // food = 'chicken';
// // console.log(food);
// // eat(); chicken, half-chicken

// 5.
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food); error

// 6.
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);


// // var genre;
// // console.log(genre);
// // genre = "disco";
// // rewind();
// // function rewind() {
// //     var genre;
// //     genre = "rock";
// //     console.log(genre);
// //     genre = "r&b";
// //     console.log(genre);
// // }
// // console.log(genre); undefined, rock, r&b , disco


// 7.
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);


// // var genre;
// // console.log(genre);
// // genre = "disco";
// // rewind();
// // function rewind() {
// //     var genre;
// //     genre = "rock";
// //     console.log(genre);
// //     genre = "r&b";
// //     console.log(genre);
// // }
// // console.log(genre); undefined, rock, r&b, disco


8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// } {} {}
