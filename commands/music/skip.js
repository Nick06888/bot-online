module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in una vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Non sei nella mia vocale !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Non sto suonando !`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} -  **skippata** !`);
    },
};