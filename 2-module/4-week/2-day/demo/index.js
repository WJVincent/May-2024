const Type = require('./type.js');
const Move = require('./moves.js');
const Pokemon = require('./pokemon.js');

const fire = new Type('fire');
const water = new Type('water');
const grass = new Type('grass');

// water moves
const waterGun = new Move('water gun', 5, 15, water);
const bubble = new Move('bubble', 10, 25, water);
const surf = new Move('surf', 25, 35, water);

//fire moves
const ember = new Move('ember', 5, 15, fire);
const firePunch = new Move('fire punch', 10, 25, fire);
const flamethrower = new Move('flamethrower', 25, 35, fire);

//grass moves
const leechSeed = new Move('leech seed', 5, 15, grass);
const megaDrain = new Move('mega drain', 10, 25, grass);
const solarBeam = new Move('solar beam', 25, 35, grass);

const squirtle = new Pokemon('squirtle', water, [waterGun, bubble, surf]);
const charmander = new Pokemon('charmander', fire, [ember, firePunch, flamethrower]);
const bulbasaur = new Pokemon('bulbasaur', grass, [leechSeed, megaDrain, solarBeam]);


const add = (a, b) => a + b;
