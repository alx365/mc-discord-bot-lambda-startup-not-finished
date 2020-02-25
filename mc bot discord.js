const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
    if (msg.author == '362198518129098752' || msg.author == '<Whatever discord id you want>' || msg.author == '<Whatever discord id you want>') {
        if (msg.channel == DMChannel) {
            if (msg.content.toUpperCase().trim() == "START SERVER") {
                //! call lambda function
            }
        }
    }
})
// Get the token from https://discordapp.com/developers/applications
// Then click the add new app button
// Once you did that navigate on the left hand side to bot
// Set the bot up
// Then click: "click to reveal token"
// Copy that token and paste it in here
client.login('your token here');


// To invite the bot visit the webpage with the wright data: https://discordapp.com/api/oauth2/authorize?client_id=<youre client id from General Info>&scope=bot&permissions=<Whatever permissions token you took (Get one from the bot page and then scroll down)> 