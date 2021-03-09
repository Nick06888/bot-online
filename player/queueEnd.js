module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Non c'è più niente da suonare !`);
};