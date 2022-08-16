const name = "adan";
const username = "@adanpradana";

const printURL = (username) => {
  const instagram = `http://instagram.com/adanpradana`;
  return `${instagram} is ${username}`;
};

const print = printURL(username);
console.log(print);

function thisIsA() {
  console.log(`this is A`);
  function thisIsB() {
    console.log(`this is B`);
    function thisIsC() {
      console.log(`this is C`);
    }
    thisIsC();
  }
  thisIsB();
}
thisIsA();
