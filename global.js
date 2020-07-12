var Global =
{
    profile : ["", ""],     // ["Discord ID", "LOL Username"]

    accountRegion : "",     // EUW, NA, ...
    serverRegion : "",      // euw1, na1, ...

    // Get a summoner by summoner name https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName
    summonerID : "",
    accountID : "",
    puuid : "",
    // name is in profile[1]
    profileIconID : "",
    revisionDate : "",
    summonerLevel : "",

    // Get league entries in all queues for a given summoner ID https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntriesForSummoner
    leagueID : "",
    queueType : "",
    tier : "",
    rank : "",
    summonerID : "",
    summonerName : "",
    leaguePoints : "",
    wins : "",
    losses : "",
    veteran : "",
    inactive : "",
    freshBlood : "",
    hotStreak : "",

    // Get matchlist for games played on given account ID and platform ID and filtered using given filter parameters, if any https://developer.riotgames.com/apis#match-v4/GET_getMatchlist
    gameID : ["", "", "", "", "", "", "", "", "", ""],

    // Get match by match ID https://developer.riotgames.com/apis#match-v4/GET_getMatch
    win : ["", "", "", "", "", "", "", "", "", ""],
    wins : "",
    losses : ""

};
module.exports = Global;