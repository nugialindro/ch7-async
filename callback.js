const fs = require("fs-extra");
const tanggal = new Date();

function withCallBack() {
  fs.outputFile("tugas/contoh.txt", "Ini dibuat dengan callback", () => {
    fs.copy("tugas/contoh.txt", "tugas/backup.txt", () => {
      fs.appendFile("tugas/backup.txt", `\nini adalah file callback backup yang dibuat pada ${tanggal}`, () => {
        fs.readFile("tugas/backup.txt", "utf8", (err, tugas) => {
          console.log(tugas);
          fs.copy("tugas/", "tugas-callback/", () => {
            fs.remove("tugas/", () => {
              fs.readFile("tugas-callback/backup.txt", "utf8", (err, tugasCallback) => {
                console.log(tugasCallback);
              });
            });
          });
        });
      });
    });
  });
}

withCallBack();
