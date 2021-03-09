module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - non sto suonando !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - non sei connesso !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - li dentro non mi vogliono.. aggiusta i permessi !`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} la tua nazione non mi vuole! Skippando...`);
            break;
        case 'MusicStarting':
            message.channel.send(`The music is starting... please wait and retry!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Something went wrong ... Error : ${error}`);
    };
};
