
class Channel
	constructor: (@server, @name) ->
		@nicks = []
		@messages = []

	add_nick: (nick) ->
		@nicks.push(nick)

	rm_nick: (nick) ->
		@nicks.splice(@nicks.indexOf(nick), 1)

	add_msg: (msg) ->
		@messages.push(msg)


