const fs = require("fs-extra");
const tanggal = new Date();

// async await
async function withAsyncAwait() {
  await fs.outputFile("tugas/contoh.txt", "Ini dibuat melalui async-await"),
    await fs.copy("tugas/contoh.txt", "tugas/backup.txt"),
    await fs.appendFile("tugas/backup.txt", `\nini adalah file async-await backup yang dibuat pada ${tanggal}`);

  const tugas = await fs.readFile("tugas/backup.txt", "utf8");
  console.log(tugas);

  await fs.copy("tugas/", "tugas-async-await/");
  await fs.remove("tugas/");

  const tugasAsyncAwait = await fs.readFile("tugas-async-await/backup.txt", "utf8");
  console.log(tugasAsyncAwait);
}

withAsyncAwait();
