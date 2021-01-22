const knex = require("knex");

const environment = process.env.NODE_ENV || "development";

const configs = require("../knexfile.js");

const db = knex(configs[environment]);

module.exports = db;
