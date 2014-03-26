var _ = require('underscore');
var traverse = require('traverse');

var Requirement = function (item, quantity) {
  this.item = item;
  this.quantity = quantity;

  return this;
};

Requirement.prototype.toString = function() {
  return "Requirement ["+this.item.name+": "+this.quantity+"]";
};


var Item = function (name, requirements) {
  this.name = name;
  this.requirements = requirements;

  this.getCoreRequirements = function (count) {
    /* 
      Returns an array of Requirement objects.
      None of the returned objects is for an item with
      a requirement.
    */
    count = count || 1;
    // it doesn't matter that we call both count. the outer count is
    // only there to provide a base value to this inner function
    function buildRequirements(item, count) {
      /* 
        returns the requirements for an item
      */
      return _.map(item.requirements, function (el) {
        // get the requirements of the components for the # of the required item
        var sub_requirements = buildRequirements(el.item, count*el.quantity);
        if(sub_requirements.length){
          return sub_requirements;
        } else {
          // return a new requirement for the number of the parent item to make
          return new Requirement(el.item, count*el.quantity);
        }
      });
    }

    core_requirements = buildRequirements(this, count);
    function cleanup(arr){
      /*
        remove all the arrays surrounding the data we're interested in
      */
      nodes = traverse.nodes(arr);
      return _.filter(nodes, function(el) {
        return el.quantity;
      });
    }
    return cleanup(core_requirements);
  };

  return this;
};

Item.prototype.toString = function() {
  return "Item ["+this.name+"]";
};


module.exports = {
  Item: Item,
  Requirement: Requirement
};