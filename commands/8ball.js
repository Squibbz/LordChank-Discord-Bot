module.exports = {
    name: '8ball',
    description: 'Ask the Magic 8 Ball a question!',
    async execute(message) {

        var answers = ["As I see it, yes.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don’t count on it.",
            "It is certain.",
            "It is decidedly so.",
            "Most likely.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Outlook good.",
            "Reply hazy, try again.",
            "Signs point to yes.",
            "Very doubtful.",
            "Without a doubt.",
            "Yes.",
            "Yes – definitely.",
            "You may rely on it."];

        let rndm = Math.floor(Math.random() * 20);

        return message.channel.send(answers[rndm]);

    }
}