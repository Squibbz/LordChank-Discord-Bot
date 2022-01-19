var isReady = true;

module.exports = {
    name: 'jungle',
    aliases: ['kill'],
    description: 'Find out where the lions sleep tonight.',
    async execute (message, commandName) {
        
        if (isReady) {
            isReady = false;

            var voiceChannel = message.member.voice.channel;

            if (!voiceChannel) {
                return message.reply('you have to be in a voice channel to play music!');
            }
    
            const permissions = voiceChannel.permissionsFor(message.client.user);
    
            if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
                return message.channel.send("I don't have permission to join and speak in your voice channel!");
            }
            
            voiceChannel.join().then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './audio/jungle.mp3'), {volume: 0.75});

                dispatcher.on("end", end => {
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));
            isReady = true;

            if (commandName === 'kill') {
            voiceChannel.leave();
            }
        }

        
    }
}