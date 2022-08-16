{
  const result = (a, b) => [a + b, a * b];

  const [plus, river] = result(5, 7);
  console.log(plus);
  console.log(river);
}
{
  const newResult = (a, b) => ({
    tambah: a + b,
    kali: a * b,
    kurang: a - b,
    bagi: a / b,
  });

  const { tambah, ...kurang } = newResult(43, 4);
  console.log(tambah);
  console.log(kurang);
}
const employee = {
  id: 12,
  name: "adan",
  age: 28,
  gender: "male",
};

{
  const getEmployee = ({ name, age, gender }) => `hello my name is ${name}, and im ${age} years old, and im ${gender}`;
  console.log(getEmployee(employee));
}
