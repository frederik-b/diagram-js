var RuleProvider = require('../../../../../lib/features/rules/RuleProvider');

function ConnectRules(eventBus) {
  RuleProvider.call(this, eventBus);
}

ConnectRules.$inject = ['eventBus'];

module.exports = ConnectRules;

ConnectRules.prototype = Object.create(RuleProvider.prototype);


ConnectRules.prototype.init = function() {

  this.addRule('connection.create', function(context) {
    var source = context.source,
        target = context.target;

    return source && target && source.parent === target.parent;
  });
};