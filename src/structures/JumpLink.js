let id = 0;

/**
 * Represents a Discord jump link/message link.
 */
class JumpLink {
	constructor(link) {
		if (!JumpLink.jumpLinkRegex.test(link)) throw new Error('Invalid jump link URL');

		let parsed = link.match(JumpLink.jumpLinkRegex);

		this.type = parsed[2] === '@me' ? 'dm' : 'text';
		this.channelID = parsed[3];
		this.messageID = parsed[4];
		this.id = ++id;
	}

	async init() {
		this.channel = client.channels.get(this.channelID);
		if (!this.channel) return this.valid = false;

		try {
			this.message = await this.channel.fetchMessage(this.messageID);
		} catch (err) {
			this.valid = false;
			if (err.toString() !== 'DiscordAPIError: Unknown Message') console.error('Error retrieving JumpLink message:\n' + err);
		}

		if (this.channel && this.message) this.valid = true;
	}

	toEmbed() {
		const message = this.message;

		let out = {
			color: 0x7289da,
			author: {
				name: message.author.tag,
				icon_url: message.author.displayAvatarURL
			}
		};

		if (message.content) out.description = message.content;

		return out;
	}
}

JumpLink.jumpLinkRegex = /https?:\/\/(canary\.|ptb\.)?discordapp.com\/channels\/([0-9]{17,19}|@me)\/([0-9]{17,19})\/([0-9]{17,19})/;
JumpLink.jumpLinkRegexGlobal = /https?:\/\/(canary\.|ptb\.)?discordapp.com\/channels\/([0-9]{17,19}|@me)\/([0-9]{17,19})\/([0-9]{17,19})/g;

module.exports = JumpLink;