module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in una vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Non sei nella stessa vocale !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Non sto suonando niente !`);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(`${client.emotes.success} - coda in shuffle **${client.player.getQueue(message).tracks.length}** Canzone(i) !`);
    },
};