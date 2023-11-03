import db from "../util/db.js"

const importMonster = {
  async import (monster) {
    try {
      const payload = await db('monsters')
      .insert({
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
    } catch (err) {
      console.log(err)
    }
  }
}

export { importMonster }