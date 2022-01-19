const functions = require('../lordchank.js');

module.exports = {
    name: 'kick',
    description: 'Kick the targeted user',
    async execute(message) {

        const user = functions.getMention(args[0]);

        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.reply("you do not have permission to use that command.")
        }

        if (user) {
            const targetMember = message.guild.members.cache.get(user.id)

            targetMember.kick()
            message.channel.send(`<@${user.id}> was kicked`)
        } else {
            message.reply("That member was not found");
        }

    }
}