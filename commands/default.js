const Discord = require('discord.js');

module.exports = 
{
    name: 'default',
    description: "Default message if the command in not recognised",
    async execute(message,args)
    {
        const defaultMessageEmbed = new Discord.MessageEmbed()
        .setTitle("Command not recognised!")
        .setDescription("Check all available commands with `!help`")
        message.channel.send(defaultMessageEmbed);
        return;
    }
}