const fs = require("fs");

fs.readFile("./assets/texto1.txt", "utf-8", (error, data) => {
  console.log(data);
  fs.readFile("./assets/texto2.txt", "utf-8", (error, data) => {
    console.log(data);
    fs.readFile("./assets/texto3.txt", "utf-8", (error, data) => {
      console.log(data);
    });
  });
});

fs.readFile("./assets/texto2.txt", "utf-8", (error, data) => {
  fs.writeFile(
    "./assets/texto4.txt",
    data.toUpperCase(),
    "utf-8",
    (error, data) => {}
  );
});

fs.readFile("./assets/texto1.txt", "utf-8", (error, data) => {
  let sumaData = data;

  fs.readFile("./assets/texto2.txt", "utf-8", (error, data) => {
    sumaData += data;
    fs.readFile("./assets/texto3.txt", "utf-8", (error, data) => {
      sumaData += data;
      fs.writeFile(
        "./assets/todosLosTextos.txt",
        sumaData,
        "utf-8",
        (error, data) => {}
      );
    });
  });
});