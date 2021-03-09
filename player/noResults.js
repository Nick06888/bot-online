module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Nessun risultato ${query} !`);
};