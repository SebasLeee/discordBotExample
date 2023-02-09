const {Client, GatewayIntentBits, Partials, Collection} = require('discord.js')

const {loadEvents} = require('./Handlers/eventHandler')
const {loadCommands} = require('./Handlers/commandHandler')

const client = new Client({
    intents:[Object.keys(GatewayIntentBits)],
    partials:[Object.keys(Partials)]
})

client.commands = new Collection();
client.config = require('./config.json')

module.exports = client

client.login(client.config.token).then(()=>{
    loadEvents(client);
    loadCommands(client);
})
