
nav = document.getElementsByClassName('nav')[0]
nicks = document.getElementsByClassName('nav')
chat = document.getElementsByClassName('nav')


add_channel= (server, channel) ->

	chan = new Channel(server, channel)
	chan_nav = document.createElement('a')
	chan_text = document.createTextNode(channel)
	chan_nav.appendChild(chan_text)
	nav.appendChild(chan_nav)
	chan_nav.title = server + ": " + channel
	chan_nav.href = "#" + server + "/" + channel
	chan_nav.onclick = () ->
		undefined

add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
add_channel("test", "#test")
