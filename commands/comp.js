const functions = require('../lordchank.js');

module.exports = {
    name: 'comp',
    description: '@ a user to give them a compliment!',
    async execute (message) {
        const user = functions.getMention(args[0]);

        var replies = ["You're a gift to those around you,",
            "You light up the room,",
            "You deserve a hug right now,",
            "On a scale from 1 to 10, you're an 11,",
            "You're like a ray of sunshine on a really dreary day,",
            "Everything would be better if more people were like you,",
            "That color is perfect on you,",
            "If you were a box of crayons, you'd be the giant name-brand one with the built-in sharpener,",
            "The people you love are lucky to have you in their lives,",
            "Any team would be lucky to have you on it,"]

        const comp = replies[Math.floor(Math.random() * replies.length)];

        return message.channel.send(comp + ` <@${user.id}>.`);
    }
}