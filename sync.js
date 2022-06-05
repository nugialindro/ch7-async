const fs = require("fs-extra");
const tanggal = new Date();

function withSync() {
  fs.outputFileSync("tugas/contoh.txt", "Ini dibuat melalui dengan sync");
  fs.copySync("tugas/contoh.txt", "tugas/backup.txt");
  fs.appendFileSync("tugas/backup.txt", `\nini adalah sync backup yang dibuat pada ${tanggal}`);
  const tugas = fs.readFileSync("tugas/backup.txt", "utf8");
  console.log(tugas);
  fs.copySync("tugas/", "tugas-sync/");
  fs.removeSync("/tugas");
  const tugasSync = fs.readFileSync("tugas-sync/backup.txt", "utf8");
  console.log(tugasSync);
}

withSync();
