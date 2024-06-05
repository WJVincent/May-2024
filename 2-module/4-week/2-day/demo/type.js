const MATCHUPS = {
    fire: {
        strong: 'grass',
        weak: 'water'
    },
    grass: {
        strong: 'water',
        weak: 'fire'
    },
    water: {
        strong: 'fire',
        weak: 'grass'
    }
}

class Type {
    constructor(name){
        this.name = name; 
    }

    getMatchup(enemyType){
        //tie
        if(enemyType.name === this.name) return 0;

        if(MATCHUPS[enemyType.name].strong === this.name){
            //you lose
            return -1
        } else {
            //you win
            return 1;
        }
    }
}



module.exports = Type;
