module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in una vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} -Non sei nella stessa vocale !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Non sto suonando !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Bot Sgravato' },
                fields: [
                    { name: 'Canale', value: track.author, inline: true },
                    { name: 'Gay', value: track.requestedBy.username, inline: true },
                    { name: 'Dalla playlist', value: track.fromPlaylist ? 'Si' : 'No', inline: true },

                    { name: 'Visual', value: track.views, inline: true },
                    { name: 'Dura', value: track.duration, inline: true },
                    { name: 'Filtri', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Loop', value: client.player.getQueue(message).repeatMode ? 'Si' : 'No', inline: true },
                    { name: 'Pausa', value: client.player.getQueue(message).paused ? 'Si' : 'No', inline: true },

                    { name: 'Minuto', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};