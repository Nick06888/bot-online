module.exports = {
    name: 'continua',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in una vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Non sei nella stessa vocale !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Non sto suonando niente !`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - la canzone già sta suonando !`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - Canzone ${client.player.getQueue(message).playing.title} continuata !`);
    },
};