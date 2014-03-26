var _ = require('underscore');
var Items = require('./items');
var Calculator = require('./calculator');


function jprint(obj){
  console.log(JSON.stringify(obj));
}

var raid = {
  F1_grenade: 32,
  wood_barricade: 6
};

jprint(Calculator.calculate(raid));

var grief_package = {
  wood_ceiling: 2,
  wood_stairs: 2,
  wood_pillar: 2,
  wood_foundation: 1,
  metal_door: 2
};

jprint(Calculator.calculate(grief_package));


var floor1 = {
  wood_foundation: 1,
  wood_wall: 3,
  wood_door: 1,
  wood_pillar: 4,
  wood_stairs: 1,
};

var floor2 = {
  wood_wall: 4,
  wood_pillar: 4,
  wood_stairs: 1,
};

var floor3 = {
  wood_pillar: 4,
  wood_wall: 4,
  wood_ceiling: 1,
};

var all_floors = Calculator.calculate([floor1, floor2, floor3]);

jprint(all_floors);