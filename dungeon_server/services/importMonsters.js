import db from "../util/db.js"

const importMonster = {
  async update (monster) {
    try {
      await db('monsters')
      .update({
        index: monster.index,
        name: monster.name,
        size: monster.size,
        type: monster.type,
        subtype: monster.subtype,
        alignment: monster.alignment,
        armor_class: JSON.stringify(monster.armor_class),
        hit_points: monster.hit_points,
        hit_dice: monster.hit_dice,
        hit_points_roll: monster.hit_points_roll,
        speed: JSON.stringify(monster.speed),
        strength: monster.strength,
        dexterity: monster.dexterity,
        constitution: monster.dexterity,
        intelligence: monster.intelligence,
        wisdom: monster.wisdom,
        charisma: monster.charisma,
        proficiencies: JSON.stringify(monster.proficiencies),
        damage_vulnerabilities: JSON.stringify(monster.damage_vulnerabilities),
        damage_resistances: JSON.stringify(monster.damage_resistances),
        damage_immunities: JSON.stringify(monster.damage_immunities),
        condition_immunities: JSON.stringify(monster.condition_immunities),
        senses: JSON.stringify(monster.senses),
        languages: JSON.stringify(monster.languages),
        challenge_rating: monster.challenge_rating,
        proficiency_bonus: monster.proficiency_bonus,
        xp: monster.xp,
        special_abilities: JSON.stringify(monster.special_abilities),
        actions: JSON.stringify(monster.actions),
        legendary_actions: JSON.stringify(monster.legendary_actions),
        url: monster.url
      })
      .where({
        index: monster.index
      })

    } catch (err) {
      console.log(err)
    }
  },
  async import (monster) {
    const dbData = await db('monsters')
    .select('index', 'id')

    const findDupes = dbData.filter(item => {
      const data = Object.values(monster).includes(item.index)
      return data
    })

    const payload = findDupes.map(item => {
      console.log(item)
      return {
        index: item.index,
        name: item.name,
        size: item.size,
        type: item.type,
        subtype: item.subtype,
        alignment: item.alignment,
        armor_class: JSON.stringify(item.armor_class),
        hit_points: item.hit_points,
        hit_dice: item.hit_dice,
        hit_points_roll: item.hit_points_roll,
        speed: JSON.stringify(item.speed),
        strength: item.strength,
        dexterity: item.dexterity,
        constitution: item.dexterity,
        intelligence: item.intelligence,
        wisdom: item.wisdom,
        charisma: item.charisma,
        proficiencies: JSON.stringify(item.proficiencies),
        damage_vulnerabilities: JSON.stringify(item.damage_vulnerabilities),
        damage_resistances: JSON.stringify(item.damage_resistances),
        damage_immunities: JSON.stringify(item.damage_immunities),
        condition_immunities: JSON.stringify(item.condition_immunities),
        senses: JSON.stringify(item.senses),
        languages: JSON.stringify(item.languages),
        challenge_rating: item.challenge_rating,
        proficiency_bonus: item.proficiency_bonus,
        xp: item.xp,
        special_abilities: JSON.stringify(item.special_abilities),
        actions: JSON.stringify(item.actions),
        legendary_actions: JSON.stringify(item.legendary_actions),
        url: item.url
      }
    })
    if (payload.length === 0) return
    await db('monsters')
    .insert(payload)
    this.update(monster)
  }
}

export { importMonster }