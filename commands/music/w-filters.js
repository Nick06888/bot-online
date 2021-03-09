module.exports = {
    name: 'w-filters',
    aliases: ['filters'],
    category: 'Music',
    utilisation: '{prefix}w-filters',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Non sei in una vocale !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Non siete nelle stesse vocali !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Non sto suonando !`);

        const filtersStatuses = [[], []];

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? client.emotes.success : client.emotes.off));
        });

        message.channel.send({
            embed: {
                color: 'ORANGE',
                footer: { text: 'Bot Sgravato' },
                fields: [
                    { name: 'Filters', value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `Lista filtri.\nUsa \`${client.config.discord.prefix}filter\` per aggiungere un filtro alla canzone.`,
            },
        });
    },
};