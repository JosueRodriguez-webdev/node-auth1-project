exports.up = function(knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl
      .string("username", 25)
      .unique()
      .notNullable();
    tbl.string("password", 25).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
