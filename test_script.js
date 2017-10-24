const pg = require("pg");
const settings = require("./settings"); // settings.json
let input = process.argv[2].split('').join('');

const client = new pg.Client({
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
});

client.connect((err) => {
    if (err) {
        return console.error("Connection Error", err);
    }
    client.query("SELECT * FROM famous_people WHERE last_name LIKE $1 OR first_name LIKE $1", [`%${input}%`], (err, result) => {
    if (err) {
        return console.error("error running query", err);
    }
    console.log("Searching...");
    console.log(`Found ${result.rows.length} person(s) by the name '${input}':`);
    for (let row of result.rows) {
    let birthdate = `${row.birthdate}`;
    let bd2 = birthdate.replace("00:00:00 GMT+0000 (UTC)", "");
    console.log(`- ${row.id} : ${row.first_name} ${row.last_name} born ${bd2}`);
    }
client.end();
});
});


