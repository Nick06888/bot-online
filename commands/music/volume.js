module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in una vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Non sei nella stessa vocale !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Non sto suonando niente !`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Metti un numero valido !`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} - Da 1 a 100 !`);

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.channel.send(`${client.emotes.success} - Volume messo a **${parseInt(args[0])}%** !`);
    },
};