// import db from "../util/db.js"
import axios from "axios"
// import { Model } from "objection"
import { importMonster } from "./importMonsters.js"

export default {
  async getMonsters () {
    let monsters
    try {
      const response = await axios.get('https://www.dnd5eapi.co/api/monsters')
      monsters = response.data.results
      monsters.map(async item => {
        try {
          const response = await axios.get(`https://www.dnd5eapi.co/api/monsters/${item.index}`)
          importMonster.dropMonsters(response.data)
        } catch (err) {
          console.log(err)
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
}