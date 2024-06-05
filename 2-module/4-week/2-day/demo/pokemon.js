const Type = require('./type.js');
const Move = require('./moves.js');

class Pokemon {
    //name -> string
    //type -> instance of the type class
    //moves -> [instances of the move class]

    constructor(name, type, moves){
        this.name = name;
        if(type instanceof Type) this.type = type;
        if(moves.every(el => el instanceof Move && el.type.name === this.type.name)) this.moves = moves;
        this.mana = 100;
        this.hp = 100;
        
        if(this.type === undefined || this.moves === undefined) throw new Error('you messed up, do better');
    }

    rest(){
        this.mana = 100;
        this.hp = 100;
    }

    fight(enemy){
        const areYouWinning = this.type.getMatchup(enemy.type);
        if(areYouWinning === 0){
            console.log('its illegal to fight your own type');
        } else if(areYouWinning === 1){
            console.log('ggez');
        } else {
            console.log('git gud');
        }
    }
}

module.exports = Pokemon;
