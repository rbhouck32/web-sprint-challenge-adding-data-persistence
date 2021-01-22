const db = require("../../data/dbConfig.js");

module.exports = {
  add,
  get,
  getById,
};

function get() {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
}

function getById(id) {
  return db("tasks").where({ task_id: id }).first();
}

function add(task) {
  return db("tasks")
    .insert(task)
    .then((ids) => {
      return getById(ids[0]);
    });
}
