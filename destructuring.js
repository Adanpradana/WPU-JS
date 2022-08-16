const array = ["satu", "dua", "tiga"];
const [props, params, state] = array;
console.log(props);
console.log(params);
console.log(state);

const obj = {
  name: "adan",
  age: "28",
  gender: "male",
};

const { name, age, gender } = obj;
console.log(name, age, gender);

function test() {
  return ["hello", "ciao", "heheh"];
}
const [space, male, bru] = test();
console.log(space);
console.log(bru);
