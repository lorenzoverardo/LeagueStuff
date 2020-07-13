const Discord = require('discord.js');

module.exports = 
{
    name: 'help',
    description: "Show available commands",
    async execute(message,args)
    {
        const helpEmbed = new Discord.MessageEmbed()
        .setTitle("Available commands")
        .setDescription("`!l add [region] [summoner_name], !l profile, !l remove`")
        message.channel.send(helpEmbed);
        return;
    }
}