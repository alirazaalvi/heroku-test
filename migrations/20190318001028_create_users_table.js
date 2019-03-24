exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('phone_number');
      table.string('mobile_number');
      // Role
      // 1: User
      // 2: Photographer
      table.integer('role').notNullable();
      table.boolean('is_active').notNullable().defaultTo(false);
      table.boolean('is_deleted').notNullable().defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
  ])
);

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('users'),
  ])
);
