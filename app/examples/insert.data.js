//app/examples/insert.data.js
const sql = require("../models/db");
sql.query("INSERT INTO books VALUES (NULL, 'title', 'desc', 'per
pustakaan.png', current_timestamp());", (err, res) => {
 if (err) {
 console.log(err);
 } else {
 console.log("Data berhasil ditambahkan: " + res.affectedRows
);
 }
});