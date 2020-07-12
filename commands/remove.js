const Discord = require('discord.js');
const global = require('../global.js');

module.exports =
{
    name: 'remove',
    description: "Unlink a LOL profile from your Discord account",
    async execute(message,args){

        if(global.profile[1] === ""){
            const noProfileLinkedEmbed = new Discord.MessageEmbed()
            .setTitle("No LOL profile is linked to your account")
            .setDescription("Please add one first with `!l add [region] [summoner_name]`")
            message.channel.send(noProfileLinkedEmbed);
            return;
        }

        const unlinkEmbed = new Discord.MessageEmbed()
        .setTitle(global.profile[1]+" ["+global.accountRegion+"] is no more linked to your account!")
        message.channel.send(unlinkEmbed);

        global.profile[1] = "";
    }
}