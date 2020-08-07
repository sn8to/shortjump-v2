let id = 0;

/**
 * Represents a Discord jump link/message link.
 */
class JumpLink {
	constructor(link) {
		if (!JumpLink.jumpLinkRegex.test(link)) throw new Error('Invalid jump link URL');

		let parsed = link.match(JumpLink.jumpLinkRegex);

		this.type = parsed[1] === '@me' ? 'dm' : 'text';
		this.channelID = parsed[2];
		this.messageID = parsed[3];
		this.id = ++id;
	}

	async init() {
		this.channel = client.channels.get(this.channelID);
		if (!this.channel) return this.valid = false;

		try {
			this.message = await this.channel.fetchMessage(this.messageID);
		} catch (err) {
			this.valid = false;
			if (err.toString() !== 'DiscordAPIError: Unknown Message' && err.toString() !== 'DiscordAPIError: Missing Access') console.error('Error retrieving JumpLink message:\n' + err);
		}

		if (this.channel && this.message) this.valid = true;
	}

	toMessageOptions(attachmentsType, displayEmbeds) {
		const message = this.message;

		let embed = {
			color: 0x7289da,
			author: {
				name: message.author.tag,
				icon_url: message.author.displayAvatarURL
			}
		};

		if (message.content) embed.description = message.content;

		if (message.attachments.size > 0 && attachmentsType < 3) {
			let toList = [];

			message.attachments.forEach(attachment => {
				if (attachmentsType === 1 && !embed.image && attachment.height) embed.image = { url: attachment.url };
				toList.unshift(attachment);
			});

			if (attachmentsType === 2 || toList.length > 1 || !toList[0].height) embed.fields = [ {
				name: 'Attachments',
				value: toList.map(attachment => `[${attachment.filename}](${attachment.url})`).join('\n')
			} ];
		}

		let out = { embed };

		if (attachmentsType === 3 && message.attachments.size > 0) out.files = message.attachments.map(attachment => {
			return { attachment: attachment.url, name: attachment.filename };
		});

		return out;
	}
}

JumpLink.jumpLinkRegex = /https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?.com\/channels\/([0-9]{17,19}|@me)\/([0-9]{17,19})\/([0-9]{17,19})/;
JumpLink.jumpLinkRegexGlobal = /https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?.com\/channels\/([0-9]{17,19}|@me)\/([0-9]{17,19})\/([0-9]{17,19})/g;
JumpLink.replyRegex = /^Replying to <@([0-9]{17,19})> from https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?.com\/channels\/([0-9]{17,19}|@me)\/([0-9]{17,19})\/([0-9]{17,19})\n/;

module.exports = JumpLink;
