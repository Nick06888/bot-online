module.exports = {
    name: 'unloop',
    aliases: ['ulp', 'unrepeat'],
    category: 'Music',
    utilisation: '{prefix}unloop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in una vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Non sei nella stessa vocale !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Non sto suonando !`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
            };   return message.channel.send(`${client.emotes.success} - Loop **OFF** !`);
        };
    },
};
