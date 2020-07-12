const Discord = require('discord.js');
const axios = require('axios');
const config = require('../config.json');
const global = require('../global.js');

module.exports =
{
    name: 'profile',
    description: "Show information about your linked LOL profile",
    async execute(message,args){

        if(global.profile[1] === "")
        {
            const profileNotLinkedEmbed = new Discord.MessageEmbed()
            .setTitle("You need to link your LOL profile first!")
            message.channel.send(profileNotLinkedEmbed);
            return;
        }
        
        let getLeague = async() =>
        {
            let response = await axios.get("https://"+global.serverRegion+".api.riotgames.com/lol/league/v4/entries/by-summoner/"+global.summonerID+"?api_key="+config.api_key);
            let league = response.data;
            return league;
        }

        let leagueValue = await getLeague();

        let getMatchlist = async() =>
        {
            let response = await axios.get("https://"+global.serverRegion+".api.riotgames.com/lol/match/v4/matchlists/by-account/"+global.accountID+"?endIndex=10&beginIndex=0&api_key="+config.api_key);
            let matchlist = response.data;
            return matchlist;
        }

        let matchlistValue = await getMatchlist();

        global.leagueID = leagueValue[0].leagueId;
        global.queueType = leagueValue[0].queueType;
        global.tier = leagueValue[0].tier;
        global.rank = leagueValue[0].rank;
        global.summonerID = leagueValue[0].summonerId;
        global.summonerName = leagueValue[0].summonerName;
        global.leaguePoints = leagueValue[0].leaguePoints;
        global.wins = leagueValue[0].wins;
        global.losses = leagueValue[0].losses;
        global.veteran = leagueValue[0].veteran;
        global.inactive = leagueValue[0].inactive;
        global.freshBlood = leagueValue[0].freshBlood;
        global.hotStreak = leagueValue[0].hotStreak;

        for (i = 0; i < 10; i++)
        {
            global.gameID[i] = matchlistValue.matches[i].gameId;
        }

        await calls();

        global.wins = 0;
        global.losses = 0;

        for (i = 0; i < 10; i++)
        {
            if (global.win[i] === true)
            {
                global.wins++;
            }
            else if (global.win[i] === false)
            { 
                global.losses++;
            }
        }

        if(global.tier != null && global.rank != null)
        {
            const profileInfoEmbed = new Discord.MessageEmbed()
            .addField("Profile: ", global.profile[1], true)
            .addField("Level / Region", global.summonerLevel +" / "+ global.accountRegion, true)
            .addField("Rank", global.tier.charAt(0) + global.tier.substring(1).toLowerCase() + " " + global.rank)
            .addField("Last Games:","10G "+global.wins+"W "+global.losses+"L / "+global.wins/10*100+"% WR", true)
            message.channel.send(profileInfoEmbed);

        } else
        {
            const profileInfoEmbed = new Discord.MessageEmbed()
            .addField("Profile: ", global.profile[1], true)
            .addField("Level / Region", global.summonerLevel +" / "+ global.accountRegion, true)
            .addField("Rank", "Unranked", true)
            .addField("Last Games:","10G "+global.wins+"W "+global.losses+"L / "+global.wins/10*100+"% WR", true)
            message.channel.send(profileInfoEmbed);
        }
    }
}

// slow af, is there a better way?
async function calls() {
    let getMatch0 = async () => {
        let response = await axios.get("https://" + global.serverRegion + ".api.riotgames.com/lol/match/v4/matches/" + global.gameID[0] + "?api_key=" + config.api_key);
        let match = response.data;
        return match;
    };

    let match0Value = await getMatch0();

    let getMatch1 = async () => {
        let response = await axios.get("https://" + global.serverRegion + ".api.riotgames.com/lol/match/v4/matches/" + global.gameID[1] + "?api_key=" + config.api_key);
        let match = response.data;
        return match;
    };

    let match1Value = await getMatch1();

    let getMatch2 = async () => {
        let response = await axios.get("https://" + global.serverRegion + ".api.riotgames.com/lol/match/v4/matches/" + global.gameID[2] + "?api_key=" + config.api_key);
        let match = response.data;
        return match;
    };

    let match2Value = await getMatch2();

    let getMatch3 = async () => {
        let response = await axios.get("https://" + global.serverRegion + ".api.riotgames.com/lol/match/v4/matches/" + global.gameID[3] + "?api_key=" + config.api_key);
        let match = response.data;
        return match;
    };

    let match3Value = await getMatch3();

    let getMatch4 = async () => {
        let response = await axios.get("https://" + global.serverRegion + ".api.riotgames.com/lol/match/v4/matches/" + global.gameID[4] + "?api_key=" + config.api_key);
        let match = response.data;
        return match;
    };

    let match4Value = await getMatch4();

    let getMatch5 = async () => {
        let response = await axios.get("https://" + global.serverRegion + ".api.riotgames.com/lol/match/v4/matches/" + global.gameID[5] + "?api_key=" + config.api_key);
        let match = response.data;
        return match;
    };

    let match5Value = await getMatch5();

    let getMatch6 = async () => {
        let response = await axios.get("https://" + global.serverRegion + ".api.riotgames.com/lol/match/v4/matches/" + global.gameID[6] + "?api_key=" + config.api_key);
        let match = response.data;
        return match;
    };

    let match6Value = await getMatch6();

    let getMatch7 = async () => {
        let response = await axios.get("https://" + global.serverRegion + ".api.riotgames.com/lol/match/v4/matches/" + global.gameID[7] + "?api_key=" + config.api_key);
        let match = response.data;
        return match;
    };

    let match7Value = await getMatch7();

    let getMatch8 = async () => {
        let response = await axios.get("https://" + global.serverRegion + ".api.riotgames.com/lol/match/v4/matches/" + global.gameID[8] + "?api_key=" + config.api_key);
        let match = response.data;
        return match;
    };

    let match8Value = await getMatch8();

    let getMatch9 = async () => {
        let response = await axios.get("https://" + global.serverRegion + ".api.riotgames.com/lol/match/v4/matches/" + global.gameID[9] + "?api_key=" + config.api_key);
        let match = response.data;
        return match;
    };

    let match9Value = await getMatch9();

    for (i = 0; i < 10; i++) {
        if (match0Value.participantIdentities[i].player.accountId === global.accountID && match0Value.participantIdentities[i].participantId === match0Value.participants[i].participantId)
            global.win[0] = match0Value.participants[i].stats.win;
    }

    for (i = 0; i < 10; i++) {
        if (match1Value.participantIdentities[i].player.accountId === global.accountID && match1Value.participantIdentities[i].participantId === match1Value.participants[i].participantId)
            global.win[1] = match1Value.participants[i].stats.win;
    }

    for (i = 0; i < 10; i++) {
        if (match2Value.participantIdentities[i].player.accountId === global.accountID && match2Value.participantIdentities[i].participantId === match2Value.participants[i].participantId)
            global.win[2] = match2Value.participants[i].stats.win;
    }

    for (i = 0; i < 10; i++) {
        if (match3Value.participantIdentities[i].player.accountId === global.accountID && match3Value.participantIdentities[i].participantId === match3Value.participants[i].participantId)
            global.win[3] = match3Value.participants[i].stats.win;
    }

    for (i = 0; i < 10; i++) {
        if (match4Value.participantIdentities[i].player.accountId === global.accountID && match4Value.participantIdentities[i].participantId === match4Value.participants[i].participantId)
            global.win[4] = match4Value.participants[i].stats.win;
    }

    for (i = 0; i < 10; i++) {
        if (match5Value.participantIdentities[i].player.accountId === global.accountID && match5Value.participantIdentities[i].participantId === match5Value.participants[i].participantId)
            global.win[5] = match5Value.participants[i].stats.win;
    }

    for (i = 0; i < 10; i++) {
        if (match6Value.participantIdentities[i].player.accountId === global.accountID && match6Value.participantIdentities[i].participantId === match6Value.participants[i].participantId)
            global.win[6] = match6Value.participants[i].stats.win;
    }

    for (i = 0; i < 10; i++) {
        if (match7Value.participantIdentities[i].player.accountId === global.accountID && match7Value.participantIdentities[i].participantId === match7Value.participants[i].participantId)
            global.win[7] = match7Value.participants[i].stats.win;
    }

    for (i = 0; i < 10; i++) {
        if (match8Value.participantIdentities[i].player.accountId === global.accountID && match8Value.participantIdentities[i].participantId === match8Value.participants[i].participantId)
            global.win[8] = match8Value.participants[i].stats.win;
    }

    for (i = 0; i < 10; i++) {
        if (match9Value.participantIdentities[i].player.accountId === global.accountID && match9Value.participantIdentities[i].participantId === match9Value.participants[i].participantId)
            global.win[9] = match9Value.participants[i].stats.win;
    }
}
