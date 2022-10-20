// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const MAX_LIFE = 100;

class Weapon {
  constructor(weapname, damage) {
    this.weapname = weapname;
    this.damage = damage;
  }
}
class Shield {
  constructor(shieldName, defense) {
    this.shieldName = shieldName;
    this.defense = defense;
  }
}


class Fighter {
  constructor(namee, strength, dexterity, life, weapon=null, shield=null) {
    this.namee = namee;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = weapon;
    this.shield = shield;
  }

  
  getDamage() {
    if (this.weapon !== null) {
      return this.strength + this.weapon.damage;
    } else {
      return this.strength;
    }
  }

  getDefense() {
    if (this.shield !== null) {
      return this.dexterity + this.shield.defense;
    } else {
      return this.dexterity;
    }
  }

  fight(attacked) {
    let damageDone =
      Math.max(1, Math.floor(Math.random() * this.getDamage() * 2)) -
     attacked.getDefense();
    if (damageDone <= 0) {
      console.log(`${this.namee} miss! 🛡️`);
    } else if (Math.floor(Math.random() * 6 > 5)) {
      console.log(
        `❕❕❕CRITICAL❕❕❕ ${this.namee} ⚔️ ${attacked.namee} for ${
          4 * damageDone
        } HP`
      );
      return (attacked.life = attacked.life - 4 * damageDone);
    } else {
      console.log(`${this.namee} ⚔️ ${attacked.namee} for ${damageDone} HP`);
      return (attacked.life = attacked.life - damageDone);
    }
  }

}


const swordWood = new Weapon("Wooden Sword", 5);
const swordOfCat = new Weapon("Sword Of Cat", 50);
const shieldWood = new Shield("Wooden Shield", 5);
const shieldOfCat = new Shield("Shield Of Cat", 500);

const Heracles = new Fighter("👨Heracles", 20, 6, MAX_LIFE, swordOfCat, shieldOfCat);
const NemeanLion = new Fighter("😺Nemean Lion", 11, 13, MAX_LIFE, swordWood, shieldWood);
const Dragon = new Fighter("🐉Dragon", 30, 1);
const ratKing = new Fighter("🐀Rat King", 10, 30);

function deathMatch(fighter1, fighter2) {
  let count = 1;
  console.log(`FIGHT DAY: ${fighter1.namee} VS ${fighter2.namee}`);
  while (fighter1.life > 0 && fighter2.life > 0) {
    console.log(`🎲 ROUND ${count}`);
    fighter1.fight(fighter2);
    console.log(`${fighter2.namee} ❤️: ${fighter2.life} HP remaining`);
    if (fighter2.life <= 0) {
      console.log(`${fighter2.namee} : 💀, ✌️${fighter1.namee} wins!✌️`);
      break;
    }
    fighter2.fight(fighter1);
    console.log(`${fighter1.namee} ❤️: ${fighter1.life} HP remaining`);
    if (fighter1.life <= 0) {
      console.log(`${fighter1.namee} : 💀, ✌️${fighter2.namee} wins!✌️`);
      break;
    }
    count++;
  }
}

deathMatch(Heracles, NemeanLion);
