/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('monsters', table => {
    table.increments('id')
    table.text('index')
    table.text('name')
    table.text('size')
    table.text('type')
    table.text('subtype')
    table.text('alignment')
    table.json('armor_class')
    table.float('hit_points')
    table.text('hit_dice')
    table.text('hit_points_roll')
    table.json('speed')
    table.float('strength')
    table.float('dexterity')
    table.float('constitution')
    table.float('intelligence')
    table.float('wisdom')
    table.float('charisma')
    table.json('proficiencies')
    table.json('damage_vulnerabilities')
    table.json('damage_resistances')
    table.json('damage_immunities')
    table.json('condition_immunities')
    table.json('senses')
    table.string('languages')
    table.float('challenge_rating')
    table.float('proficiency_bonus')
    table.float('xp')
    table.json('special_abilities')
    table.json('actions')
    table.json('legendary_actions')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('monsters')
}
