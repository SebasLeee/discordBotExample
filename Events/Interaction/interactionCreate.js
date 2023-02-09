const { CommandInteraction } = require('discord.js')

module.exports = {
  name: "interactionCreate",

  async execute(interaction, client) {
    const { customId, values, guild, member } = interaction;

    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName)
      if (!command) {
        return interaction.reply({ content: "Comando Deshabilitado" })
      }
      command.execute(interaction, client)
    } else if (interaction.isButton()) {
      console.log("Es boton");
    } else if (interaction.isSelectMenu()) {
      console.log("Es un selectMenu");
    } else {
      return;
    }
  },
};
