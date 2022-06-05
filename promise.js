const fs = require("fs-extra");
const tanggal = new Date();

//promise
function withPromise() {
  fs.outputFile("tugas/contoh.txt", "Ini dibuat dengan Promise")
    .then(() => {
      return fs.copy("tugas/contoh.txt", "tugas/backup.txt");
    })
    .then(() => {
      return fs.appendFile("tugas/backup.txt", `\nini adalah file promise backup yang dibuat pada ${tanggal}`);
    })
    .then(() => {
      return fs.readFile("tugas/backup.txt", "utf8");
    })
    .then((tugas) => {
      return console.log(tugas);
    })
    .then(() => {
      return fs.copy("tugas/", "tugas-promise/");
    })
    .then(() => {
      return fs.remove("tugas/");
    })
    .then(() => {
      return fs.readFile("tugas-promise/backup.txt", "utf8");
    })
    .then((tugasPromise) => {
      return console.log(tugasPromise);
    });
}

withPromise();
