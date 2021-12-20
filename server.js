const Discord = require('discord.js')
const client = new Discord.Client()

client.on("message", message => {
  if(message.content === "Heil") {
    return message.channel.send("Lothus")
  }
})
client.login('OTIyNjIzMTUzODU4MDI3NTUx.YcEJxQ.Cz7OGji49suwvcDCe2cMhbPISvQ')
