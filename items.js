var fs = require('fs');
var _ = require('underscore');
var Models = require('./models');
var item_definitions = JSON.parse(fs.readFileSync('./items.json', 'utf8'));

// hash of all the item names and an object representation of each
var Items = {};

// Processes the JSON definitions into objects.
_.each(item_definitions, function (item_properties, index, list){
  var requirements = _.map(item_properties, function (quantity, name) {
    item = Items[name];
    return new Models.Requirement(item, quantity);
  });
  Items[index] = new Models.Item(index, requirements);
});

module.exports = Items;