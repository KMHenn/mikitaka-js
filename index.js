require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js
const client = new Discord.Client(); //create new client

const dice = require("./commands/dice");
const actions = require("./commands/actions");
const help = require("./commands/help");
const helpMsg = help.getMessage();
const errorMsg = " Invalid command (Type ~help for list of commands)";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	if (message.author == client.user){
		return;
	}

	let userTag = message.author.username;
	let response = "";
	if (message.content.startsWith("/r")) {
		let result = dice.parseRoll(message.content);	
		response = userTag + ": " + result;
		message.reply(response);
	}
	else if (message.content.startsWith("~")){
		if (message.content.includes("~help")){
			response = userTag + helpMsg;
		}
		let result = actions.getAction(message.content);
		if (result === false){
			response = userTag + errorMsg;
		}
		else{
			response = userTag + result;
		}
	}
	else{
		response = userTag + errorMsg;		
	}

	message.reply(response);
  });

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN);