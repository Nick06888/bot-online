module.exports = {
    name: 'suona',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in una vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Non sei nella stessa vocale !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Indica una canzone !`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};