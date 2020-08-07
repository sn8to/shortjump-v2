const { Collection } = require('discord.js');

const Util = require('../structures/Util');
const JumpLink = require('../structures/JumpLink');
const { jumpLinkRegex, jumpLinkRegexGlobal, replyRegex } = JumpLink;

/**
 * Parses a discord.js Message, adding a "jumplinks" property that is a Collection<JumpLink>
 * @param {Message} message The discord.js Message to be parsed for JumpLinks
 */
async function parseMessage(message) {
	const { content } = message;

	// don't bother parsing a message without jump links
	if (!jumpLinkRegex.test(content)) return;
	// don't parse an inline reply jump link since discord already renders the original message
	if (replyRegex.test(content)) content = content.split('\n').slice(1).join('\n');

	message.jumplinks = new Collection();

	await Util.forEachAsync(content.match(jumpLinkRegexGlobal), async string => {
		const jumpLink = new JumpLink(string);
		await jumpLink.init();
		if (jumpLink.valid)	message.jumplinks.set(jumpLink.id, jumpLink);
	});
}

async function message(message) {
	if (message.author.bot) return;

	await parseMessage(message);

	if (message.jumplinks && message.jumplinks.size > 0) {
		let messages = [];

		message.jumplinks.forEach(jumpLink => {
			if (jumpLink.valid) messages.push(jumpLink.toMessageOptions(1));
		});

		let total = 0;
		Util.forEachAsync(messages, async messageOptions => {
			if (++total > 3) return;
			await message.channel.send(messageOptions);
		});
	}
}

module.exports = message;
