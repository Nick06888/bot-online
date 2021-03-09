module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in una vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Non sei nella stessa vocale !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Non sto suonando !`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Non c'è una coda.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - La coda è stata **rimossa** !`);
    },
};