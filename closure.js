function init() {
  function callName(name) {
    console.log(`hello ${name}`);
  }
  return callName;
}
let getName = init();
getName("adan");

//closure juga bisa dipersingkan dengan cara spt dibawah
//menggunakan return function

function callMe() {
  return function (name) {
    // anonymous function
    console.log(`hello ${name}`);
  };
}
const calling = callMe();
calling(`adan`);
calling(`rizka`);
calling(`haris`);

function callTime(time) {
  return function (name) {
    console.log(`${time}, my name is ${name}`);
  };
}

const night = callTime("Selamat Malam");
night("adan");

function counter() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}
// miirip private method di bhs pemrograman lainnya
const result = counter();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
/*

ketika var diinisialisasi maka akan kebaca undifined
atau berisi data undifined,

apabila kita menggunakan let atau const, maka komputer
akan merepresentasikan variabel tersebut sebagai eror

let dapat diganti tipe datanya 
sedangkan const tidak dapaat diganti atau konstanta = apa

*/
