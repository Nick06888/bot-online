module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - **cancelled** !`);
    } else message.channel.send(`${client.emotes.error} - ma sei fatto bene? **1** e **${tracks.length}** !`);
};