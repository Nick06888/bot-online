module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - suonando: ${track.title} in ${message.member.voice.channel.name}`);
};