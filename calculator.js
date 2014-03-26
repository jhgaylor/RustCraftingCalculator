var _ = require('underscore');
var Items = require('./items');

var Calculator = {
  add: function (maps) {
    /* arguments are added to the obj */
    // obj = arguments.pop();
    var obj = {};
    _.each(maps, function(map){
      _.each(map, function (value, key){
        if(obj[key]){
          obj[key] += value;
        } else {
          obj[key] = value;
        }
      });
    });

    return obj;
  },
  calculate: function (map) {
    /*
      returns a map of base mats and the number of each required
    */

    if(_.isArray(map)){
      map = this.add(map);
    }
    
    var parts_map = _.map(map, function(quantity, item){
      return Items[item].getCoreRequirements(quantity);
    });

    return this.reduce(parts_map);
  },
  reduce: function (map) {
    /*
      Used to reduce the unruly datastructures generated
      by the recussive shitstorm in Item.getCoreRequirements
    */
    var parts = {};
    _.each(map, function(items) {
      _.each(items, function(item){
        if(parts[item.item.name]){
          parts[item.item.name] += item.quantity;
        } else {
          parts[item.item.name] = item.quantity;
        }
      });
    });
    return parts;
  }
  
};

module.exports = Calculator;
