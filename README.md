# ShortJump v2
The successor to ShortJump v1, created for Discord Hack Week #1

ShortJump is a bot that at its core shows previews to Discord jump/message links in chat, and further has features to store, view online, and manipulate these message links in other ways.

# Installation and Hosting
ShortJump is (fairly) easy to set up and host, with only some very few requirements:
- Node.js runtime (LTS or newer recommended)
- Basic knowledge of Node.js for troubleshooting
- A Discord bot token

When you have installed Node.js, run the following commands in your command prompt/terminal to get set up:
```sh
git clone https://github.com/GlitchMasta47/shortjump-v2.git
cd shortjump-v2
npm install
node .
```

As long as you're connected to the internet and everything works fine, those are the only four commands you need to set up and run ShortJump.

# Testing
Don't want to host ShortJump by yourself? That's fine! Join the [Arthur discord server](https://discord.gg/HW7KYG9) which also doubles as the ShortJump testing server.

# Using the bot in your server
If you own or administrate a Discord server and you'd like to have ShortJump in your server, you can use [this nifty link](https://discordapp.com/oauth2/authorize?client_id=592810781536550913&scope=bot&permissions=314368) to auto-magically add the bot to your server.

After that, ShortJump is ready to go! No setup needed after that, just let ShortJump see your jump links and embed them for you. 

# Planned features
Of course, with limited time and resources, not everything we wanted to do was done. The following list shows all of the features that didn't make it before the end of Discord Hack Week:
- Embed support (if the jump link goes to a message with an embed, the embed will not appear in the new embed created by ShortJump)
- Website (want to see even more information about the message? what about saving messages for later? all here in the website)
- Message lists (want to save a cool message for later? maybe something you need to remember, or some info that you might need in the future)
- Link shortening (the jump links are kinda long, but what if they were made a lot shorter?)
- System messages (there are some odd messages that require extra special attention, like messages that say "Ermagherd. **EpicGamer** is here." or "**CoolPerson** pinned a message to this channel.")
- Some other cool stuff
