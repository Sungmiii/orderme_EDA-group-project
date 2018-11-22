
exports.up = function(knex, Promise) {
    return knex.schema.createTable('game', (table) => {
        table.increments('id').primary(),
        table.string('value'),
        table.integer('position')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('game')
};
