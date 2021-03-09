module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} è stata aggiunta (**${playlist.tracks.length}** canzoni) !`);
};