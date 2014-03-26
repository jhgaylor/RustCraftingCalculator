# Examples

## Basic Usage
```js
// Define a set of objects
var raid = {
  F1_grenade: 32,
  wood_barricade: 6
};

// Print a nice human readable output
jprint(Calculator.calculate(raid));
```

Output: `{"wood":1204,"sulfur_ore":1707,"metal_ore":320}`


## Another Basic example
```js
var grief_package = {
  wood_ceiling: 2,
  wood_stairs: 2,
  wood_pillar: 2,
  wood_foundation: 1,
  metal_door: 2
};

jprint(Calculator.calculate(grief_package));
```

Output: `{"wood":340,"metal_ore":100}`


## Add Multiple Items
```js
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

jprint(Calculator.calculate([floor1, floor2, floor3]));
```

Output: `{"wood":950}`
