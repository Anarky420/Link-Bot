const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Link') {
    	message.channel.send('HYAH ( Hey (: )');
  	}
});

client.on('message', message => {
    if (message.content === 'Gtg') {
    	message.channel.send('HYAH ( Ok Bye :slight_frown: )');
  	}
});

client.on('message', message => {
    if (message.content === 'b') {
    	message.channel.send(' HYAH ( :b: ) ');
  	}
});

client.on('message', message => {
    if (message.content === 'Hello') {
    	message.channel.send('HYAH ( Hello :smiley: )');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
