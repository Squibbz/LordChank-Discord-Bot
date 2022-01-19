const functions = require('../lordchank.js');

module.exports = {
    name: 'insult',
    description: '@ a user to roast them',
    async execute(message) {

        var replies = ["Any similarity between you and a human is purely coincidental.",
            "Your triple chin is starting to shape up very nicely.",
            "Out of everything you could have been, it's a real shame that you're you.",
            "You're the apple that hit every branch of the tree and got hit by the lawnmower.",
            "You're so ugly your portraits hang themselves.",
            "You look like something I'd draw with my left hand.",
            "The last time I saw a face like yours, I gave it a chew toy.",
            "You are more disappointing than an unsalted pretzel.",
            "You look like a before picture.",
            "Sometimes I wonder who ties your shoes for you in the morning.",
            "You look like you eat turkey bacon voluntarily.",
            "I could try to insult you, but I'm afraid I can't do as well as nature did.",
            "Didn't I flush you this morning?",
            "Any thought that crosses your mind must have been on a long and a very lonely journey."
        ];

        const user = functions.getMention(args[0]);

        const insult = replies[Math.floor(Math.random() * replies.length)];

        if (user.id === process.env.BOT_ID) {

            return message.reply("you're seriously stupid enough to insult the insult bot?")

        } else {

            return message.channel.send(`<@${user.id}>` + ' ' + insult);

        }
    }
}