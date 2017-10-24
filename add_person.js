//const app = require('./lib/apps')
//const pg = require('pg')
const settings = require('./settings');
const first = process.argv[2];
const last = process.argv[3];
const dob = process.argv[4];

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

knex('famous_people').insert({ first_name: first , last_name: last , birthdate: dob})
    .asCallback(function(rows) {
        knex.select('').from('famous_people')
            .asCallback(function(rows){
                console.log(rows)
            })
    });

