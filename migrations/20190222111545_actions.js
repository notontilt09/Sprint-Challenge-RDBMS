
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
      tbl.increments();
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
      tbl.string('description', 255).notNullable();
      tbl.text('notes').notNullable();
      tbl.boolean('completed').defaultsTo(false);  

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
