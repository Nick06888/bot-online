module.exports = {
    name: 'coda',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in una vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Non sei nella stessa vocale !`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Non sto suonando niente !`);

        message.channel.send(`**coda server - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(looped)' : ''}**\nSuonando : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (Gay : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `E **${queue.tracks.length - 5}** other songs...` : `Nella playlist **${queue.tracks.length}** canzone(i)...`}`));
    },
};