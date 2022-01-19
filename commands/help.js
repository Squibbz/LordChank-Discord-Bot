module.exports = {
    name: 'help',
    description: 'Display menu of commands',
    async execute(message) {
        message.channel.send(`
        These are my supported commands:

        **!help** - Displays menu of commands
        **!jungle** - Find out where the lions sleep tonight
         - **!kill** - End the **!jungle** command
        **!8ball** - Ask the Magic 8 Ball a question!
        **!invite** - Creates a one-time invite to send to your friends!

        Targeted Commands:

        **!insult <@user>** - Roast a user
        **!comp <@user>** - Give a user a compliment

        Admin-Only Commands:

        **!ban <@user>** - Ban a user from the server
        **!kick <@user>** - Kick a user from the server
        `);
    }
}