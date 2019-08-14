exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
      tbl.increments('id');
      tbl
        .varchar('Vin', 17)
        .unique()
        .notNullable();
      tbl.text('Make').notNullable();
      tbl.varchar('Model').notNullable();
      tbl.integer('Mileage').notNullable();
      tbl.varchar('Transmission');
      tbl.varchar('Title');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  };
  