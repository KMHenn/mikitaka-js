require('dotenv').config(); //initialize dotenv
const { Client, Intents, Discord } = require('discord.js'); //import discord.js
const intents = new Intents();
intents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES);
const client = new Client({intents: intents});

const dice = require("./commands/dice");
const actions = require("./commands/actions");
const help = require("./commands/help");

let helpMsg = help.getMessage();

const errorMsg = " Invalid command (Type ~help for list of commands)";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
	if (message.author == client.user){
		return;
	}

	// let userTag = message.author.username;
	let response = "";
	try{
		if (message.content.startsWith("/r")) {
			dice.parseRoll(message.content).then((rollResult) => {
				message.reply(rollResult);
			});
			// response = result;
		}
		else if (message.content.startsWith("~")){
			if (message.content.includes("~help")){
				help.getMessage().then((helpTxt) => {
					message.reply(helpTxt);
				});
			}
			
			let result = actions.getAction(message.content);
			if (result === false){
				message.reply(errorMsg);
			}
			else{
				message.reply(errorMsg);
			}
		}
		else{
			message.reply(errorMsg);
		}
	}
	catch(error){
		console.log(error);
		message.reply(errorMsg);
	}
  });

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN);