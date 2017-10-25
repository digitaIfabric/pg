
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table){
      table.bigInteger('foreign_key').unsigned().index().references('id').inTable('famous_people')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table){
      table.dropColumn('foreign_key')
    })
  ])
};