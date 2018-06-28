var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/spotify_cal";
var db = pgp(connectionString);

module.exports = db;