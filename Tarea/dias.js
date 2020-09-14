const prettyMilliseconds = require("pretty-ms");

const getDate = () => {
  return new Date();
};

const diferenciaHoraria = (otherDate) => {
  return otherDate - new Date();
};

getDate();
diferenciaHoraria(new Date(2021, 07, 24));

const diferencia = prettyMilliseconds(new Date(2021, 07, 24) - new Date(), {
  verbose: true,
});
console.log(diferencia);

console.log(getDate());
console.log(diferenciaHoraria());