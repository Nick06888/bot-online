module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Here ${query}` },
            footer: { text: ' (Music-bot)' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};