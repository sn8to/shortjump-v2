const fs = require('fs');
const path = require('path');

class Util {
	static async forEachAsync(array, asyncFunction) {
		for (let i = 0; i < array.length; i++) {
			await asyncFunction(array[i]);
		}
	}

	static loadEvents() {
		const eventsDir = path.join(__basedir, 'src', 'events');
		const events = fs.readdirSync(eventsDir);

		if (!events) throw new Error('No events found.');

		events.forEach(event => {
			event = event.split('.')[0];
			client.on(event, require(path.join(eventsDir, event)));
		});
	}

	static loadCommands() {
		const commandsDir = path.join(__basedir, 'src', 'commands');
		const commands = fs.readdirSync(commandsDir);

		if (!commands) return;

		/* commands.forEach(command => {

		}); */
	}
}

module.exports = Util;