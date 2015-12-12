var Channel;

Channel = (function() {
  function Channel(server, name) {
    this.server = server;
    this.name = name;
    this.nicks = [];
    this.messages = [];
  }

  Channel.prototype.add_nick = function(nick) {
    return this.nicks.push(nick);
  };

  Channel.prototype.rm_nick = function(nick) {
    return this.nicks.splice(this.nicks.indexOf(nick), 1);
  };

  Channel.prototype.add_msg = function(msg) {
    return this.messages.push(msg);
  };

  return Channel;

})();
