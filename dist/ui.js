var add_channel, chat, nav, nicks;

nav = document.getElementsByClassName('nav')[0];

nicks = document.getElementsByClassName('nav');

chat = document.getElementsByClassName('nav');

add_channel = function(server, channel) {
  var chan, chan_nav, chan_text;
  chan = new Channel(server, channel);
  chan_nav = document.createElement('a');
  chan_text = document.createTextNode(channel);
  chan_nav.appendChild(chan_text);
  nav.appendChild(chan_nav);
  chan_nav.title = server + ": " + channel;
  chan_nav.href = "#" + server + "/" + channel;
  return chan_nav.onclick = function() {
    return void 0;
  };
};

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");

add_channel("test", "#test");
