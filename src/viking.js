// Soldier
class Soldier {
      constructor(health, strength) {
        this.health = health;
        this.strength = strength;
      }

      attack(){
        return (this.strength)
      }

      receiveDamage(damage){ //shouldn't there be a constant or variable?
        this.health -= damage; //tried a variable before but broke the code
      }

}

// Viking Soldiers

class Viking extends Soldier{
    constructor(name, health, strength){ //
    super(health, strength);
    this.name = name;
    }

receiveDamage(damage){
    super.receiveDamage(damage) //tried super.receiveDamage() but didn't work
        if (this.health > 0 ){
            return `${this.name} has received ${damage} points of damage`;
        } else{
            return `${this.name} has died in act of combat`;
        }
    }

     battleCry () {
        return "Odin Owns You All!"
    }   

}



// Saxon Soldiers
class Saxon extends Soldier{
    constructor(health, strength){
    super(health, strength);
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
            if (this.health > 0 ){
                return `A Saxon has received ${damage} points of damage`;
            } else{
                return `A Saxon has died in combat`;
            }
        }

}
//
//got this far but don't fully get it!! fresh info but... won't be able 
//to go from scratch agin I belive!!
//


// War

class War {

//build the armies    
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
addViking(viking){
    this.vikingArmy.push(viking)
}

addSaxon(saxon){
    this.saxonArmy.push(saxon)

}

//Armies Attacks

// ... aaaanNDD BRAIN FREEZE!!!!! And broke all the code!!! 

// got stuck here! And wouldn't made it above without a lot of googling...
// some part are made byt not 100% in my brain 

vikingAttack() {

//    Saxon.receiveDamage(damage) = Viking.health
//
//    addSaxon(saxon)
//        this.saxonArmy.pop(saxon)
//    
//    }
// where to go from here?! JS Bascis I believe!!! From the top!!!

}

saxonAttack() {
    
}

showStatus(){

}

}
