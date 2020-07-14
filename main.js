const Discord = require('discord.js');

const bot = new Discord.Client();
const prefix = "!l ";

const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const command = require(`./commands/${file}`); 
    bot.commands.set(command.name, command);
}

bot.once('ready', () =>
{
    console.log('LeagueStuff is online!');
    bot.user.setActivity('League of Legends', { type: "PLAYING"});
});

bot.on('message', message =>
{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command){
        case 'add':
            bot.commands.get('add').execute(message, args);
            break;
        case 'profile':
            bot.commands.get('profile').execute(message, args);
            break;
        case 'remove':
            bot.commands.get('remove').execute(message, args);
            break;
        case 'help':
            bot.commands.get('help').execute(message, args);
            break;
        default:
            bot.commands.get('default').execute(message, args);
            break;
    }
})

bot.login(process.env.token);