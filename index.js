const Discord = require('discord.js');

const config = require('./config.json');
const Util = require('./src/structures/Util');

const client = new Discord.Client();

global.client = client; // yay good coding practices
global.__basedir = __dirname;

Util.loadEvents();
Util.loadCommands();

client.login(config.token).catch(console.error);