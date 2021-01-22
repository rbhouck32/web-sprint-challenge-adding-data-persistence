const db = require("../../data/dbConfig.js");

module.exports = {
  add,
  get,
  getById,
};

function get() {
  return db("projects as p").select(
    "p.project_id",
    "p.project_name",
    "p.project_description",
    db.raw(
      "CASE WHEN p.project_completed == 0 THEN false ELSE true END AS project_completed "
    )
  );
}

function getById(id) {
  return db("projects").where({ project_id: id }).first();
}

function add(project) {
  return db("projects")
    .insert(project)
    .then((ids) => {
      return getById(ids[0]);
    });
}
