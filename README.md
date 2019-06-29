# ShortJump v2
The successor to ShortJump v1, created for Discord Hack Week #1

ShortJump is a bot that at its core shows previews to Discord jump/message links in chat, and further has features to store, view online, and manipulate these message links in other ways.

## Usage
Before you can obtain any discord message links, you will have to enable developer mode. To do so, go to your discord settings, find the appearance tab, and enable Developer Mode.

Once developer mode is enabled, you can copy the link of any message. On desktop, click the three dots on the right side of any message to view its options, and click "Copy Link." On mobile, tap and hold the message in question, tap on "Share," and copy the link to your clipboard. 

Now, paste the message in any server that ShortJump is in and ShortJump will display a preview of the message for your convenience. Note that ShortJump must be in the server where the original message was sent to display message content. 

## Installation and Hosting
ShortJump is (fairly) easy to set up and host, with only some very few requirements:
- Node.js runtime (LTS or newer recommended)
- Basic knowledge of Node.js for troubleshooting
- A Discord bot token

When you have installed Node.js, run the following commands in your command prompt/terminal to get set up:
```sh
git clone https://github.com/GlitchMasta47/shortjump-v2.git
cd shortjump-v2
npm install
```

If you do not have `git` installed, you may also [download the repository](https://github.com/GlitchMasta47/shortjump-v2/archive/master.zip) and extract it to a convenient location, then run the above commands in that directory (minus the `git clone` command). 

Once you have run the above commands, create a `config.json` file in your text editor of choice (anything will do) and insert your discord bot token, in the following format: 
```json
{
	"token": "Discord_Bot_Token_Here"
}
```

Start the bot with `node .`

As long as you're connected to the internet and everything works fine, ShortJump should now be set up and running. You can invite the bot to your server with the invite link it generates and outputs to console on startup.

## Testing
Don't want to host ShortJump by yourself? That's fine! Join the [Arthur discord server](https://discord.gg/HW7KYG9) which also doubles as the ShortJump testing server. (Preferably test ShortJump in the #playground channel.)

## Using the bot in your server
If you own or administrate a Discord server and you'd like to have ShortJump in your server (without having to self host it), you can use [this nifty link](https://discordapp.com/oauth2/authorize?client_id=592810781536550913&scope=bot&permissions=314368) to auto-magically add the bot to your server.

After that, ShortJump is ready to go! No setup needed after that, just let ShortJump see your jump links and embed them for you. 

## Planned features
(See the [trello](https://trello.com/b/u4vGO6rQ/shortjump-v2))

Of course, with limited time and resources, not everything we wanted to do was done. The following list shows all of the features that didn't make it before the end of Discord Hack Week:
- Embed support (if the jump link goes to a message with an embed, the embed will not appear in the new embed created by ShortJump)
- Website (want to see even more information about the message? what about saving messages for later? all here in the website)
- Message lists (want to save a cool message for later? maybe something you need to remember, or some info that you might need in the future)
- Link shortening (the jump links are kinda long, but what if they were made a lot shorter?)
- System messages (there are some odd messages that require extra special attention, like messages that say "Ermagherd. **EpicGamer** is here." or "**CoolPerson** pinned a message to this channel.")
- Some other cool stuff

## Issues
If you encounter any bugs, have an issue, or would like to suggest something new, feel free to [open an issue](https://github.com/GlitchMasta47/shortjump-v2/issues). 
