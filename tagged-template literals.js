const myName = "adan pradana";
const age = 28;
const email = "adan@gmail.com";

const reducing = (component, ...params) => {
  return component.reduce((values, string, i) => `${values}${string} <span class="hl">${params[i] || /*nilai akhir ->*/ ""}</span> `, /*nilai awal*/ "");
};

const str2 = reducing`hello, my name is ${myName},  im ${age} years old and i have email ${email}`;
console.log(str2);

document.body.innerHTML = str2;
