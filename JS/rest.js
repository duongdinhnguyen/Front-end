var array = [2,3,5,6,8];
var [a, ...rest] = array;
console.log(rest);

function checkRest(...rest){
    console.log(rest);
}
checkRest(...array);
