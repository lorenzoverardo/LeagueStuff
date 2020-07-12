const Discord = require('discord.js');
const axios = require('axios');
const config = require('../config.json');

const global = require('../global.js');

module.exports = 
{
    name: 'add',
    description: "Link a LOL profile to your Discord account",
    async execute(message,args)
    {
        if(!args[1])
        {
            const incorrectFormatEmbed = new Discord.MessageEmbed()
            .setTitle("Incorrect use of the command")
            .setDescription("Please use it this way: `!l add [region] [summoner_name]`")
            message.channel.send(incorrectFormatEmbed);
            return;
        } 

        global.profile[0] = message.author.id;

        global.accountRegion = args[0].toUpperCase();

        switch(args[0]){ //kr and ru are not included as they don't have a number, so they are ready to be used
            case 'br':
                args[0] = 'br1'
                break;
            case 'eune':
                args[0] = 'eun1'
                break;
            case 'euw':
                args[0] = 'euw1'
                break;
            case 'jp':
                args[0] = 'jp1'
                break;
            case 'lan':
                args[0] = 'la1'
                break;
            case 'las':
                args[0] = 'la2'
                break;
            case 'na':
                args[0] = 'na1'
                break;
            case 'oce':
                args[0] = 'oc1'
                break;
            case 'tr':
                args[0] = 'tr1'
                break;
            default:
                const profileLinkErrorEmbed = new Discord.MessageEmbed()
                .setTitle("That's not a valid region!")
                .setDescription("Valid regions are: `BR, EUNE, EUW, JP, KR, LAN, LAS, NA, OCE, RU, TR`")
                message.channel.send(profileLinkErrorEmbed);
                return;
        }

        if(global.profile[1] != "")
        {
            const alreadyLinkedProfileEmbed = new Discord.MessageEmbed()
            .setTitle("The profile "+global.profile[1]+" is already linked to your account")
            .setDescription("If you want to link another profile, please use `!l remove` to unlink it first, then try again")
            message.channel.send(alreadyLinkedProfileEmbed);
            return;
        } 

        global.serverRegion = args[0];

        try
        {

            let getSummonerInfo = async() =>
            {
                let response = await axios.get("https://"+args[0]+".api.riotgames.com/lol/summoner/v4/summoners/by-name/"+args[1]+"?api_key="+config.api_key);
                let summonerInfo = response.data;
                return summonerInfo;
            }
        
            let summonerInfoValue = await getSummonerInfo();
            
            global.summonerID = summonerInfoValue.id;
            global.accountID = summonerInfoValue.accountId;
            global.puuid = summonerInfoValue.puuid;
            global.profile[1] = summonerInfoValue.name;
            global.profileIconID = summonerInfoValue.profileIconId;
            global.revisionDate = summonerInfoValue.revisionDate;
            global.summonerLevel = summonerInfoValue.summonerLevel;

            const profileLinkEmbed = new Discord.MessageEmbed()
            .setTitle(global.profile[1]+" ["+global.accountRegion+"]")
            .setDescription('This summoner is now linked to your account!')
            message.channel.send(profileLinkEmbed);

        } catch(UnhandledPromiseRejectionWarning)
        {
            const profileLinkErrorEmbed = new Discord.MessageEmbed()
            .setTitle("Error: Summoner "+global.profile[1]+" not found")
            .setDescription("Please try again")
            message.channel.send(profileLinkErrorEmbed);
            return;
        }
    }
}