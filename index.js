// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const MAX_LIFE = 100;

class Fighter {
  constructor(namee, strength, dexterity, life) {
    this.namee = namee;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  fight(attacked) {
    let damageDone =
      Math.max(1, Math.floor(Math.random() * this.strength * 2)) - attacked.dexterity;
    if (damageDone <= 0) {
      console.log(`${this.namee} miss! 🛡️`);
    }
    else if (Math.floor(Math.random()*6 > 5 )) { console.log(
        `❕❕❕CRITICAL❕❕❕ ${this.namee} ⚔️ ${attacked.namee} for ${4*damageDone} HP`
      );
      return (attacked.life = attacked.life - 4*damageDone);}
    else {
      console.log(
        `${this.namee} ⚔️ ${attacked.namee} for ${damageDone} HP`
      );
      return (attacked.life = attacked.life - damageDone);
    }
  }

}

const Heracles = new Fighter("👨Heracles", 20, 6);
const NemeanLion = new Fighter("😺Nemean Lion", 11, 13);
const Dragon = new Fighter("🐉Dragon", 30, 1);
const ratKing = new Fighter("🐀Rat King", 5, 30);

function deathMatch(fighter1, fighter2) {
    let count = 1;
    while(fighter1.life > 0 && fighter2.life > 0) {
    console.log(`🎲 ROUND ${count}`);
    fighter1.fight(fighter2);
    console.log(`${fighter2.namee} ❤️: ${fighter2.life}`);
    if(fighter2.life <= 0){
        console.log(`${fighter2.namee} : 💀, ✌️${fighter1.namee} wins!✌️`)
        break;};
    fighter2.fight(fighter1);
    console.log(`${fighter1.namee} ❤️: ${fighter1.life}`);
    if(fighter1.life <= 0){
        console.log(`${fighter1.namee} : 💀, ✌️${fighter2.namee} wins!✌️`)
        break;};
    count++;
}}

deathMatch(Dragon, NemeanLion);
