async function ready() {
	console.log(`ShortJump is online. Serving ${client.guilds.size} guild(s). Invite link: ${await client.generateInvite(314368)}`);
}

module.exports = ready;