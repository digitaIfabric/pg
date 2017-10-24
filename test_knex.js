const settings = require("./settings"); // settings.json
var knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
        host : settings.hostname,
        user : settings.user,
        password : settings.password,
        database : settings.database
    }
});

// knex outputFamousPeople
knex.select().from("famous_people").asCallback((err,row)=>{
    console.log(row);
});