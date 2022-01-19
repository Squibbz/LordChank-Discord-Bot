const { Channel } = require("discord.js")

module.exports = {
    name: 'invite',
    description: 'Creates a one-time invite to send to your friends',
    async execute(message) {

        let invite = message.channel.createInvite({ unique: true, maxUses: 1 }).then(invite => { message.reply("Hey! I've created you an invite: https://discord.gg/" + invite.code) })

    }
}