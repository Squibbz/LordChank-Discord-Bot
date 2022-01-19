const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

require('dotenv').config();

// Check for Javascript file in the command folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Check through all files in the commands folder
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Set bot activity
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("User Commands", { type: "LISTENING" });
})

module.exports.getMention = function getMention(mention) {
    // The id is the first and only match found by the RegEx.
    const matches = mention.match(/^<@!?(\d+)>$/);

    // If supplied variable was not a mention, matches will be null instead of an array.
    if (!matches) return;

    // However the first element in the matches array will be the entire mention, not just the ID,
    // so use index 1.
    const id = matches[1];

    return client.users.cache.get(id);
}



client.on('message', async message => {
    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

    global.args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(a => a.aliases && a.aliases.includes(commandName))

    try {
        await command.execute(message, commandName, args)
    } catch (e) {
        if (e instanceof TypeError) {
            return message.reply('please provide a user\'s ID');
        } else {
            return message.channel.reply("I'm unable to do that right now. Please check my permissions.");
        }
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);