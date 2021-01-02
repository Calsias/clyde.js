const bot = require('clyde.js')
const prefix = "!"
const token = "YOUR_BOT_TOKEN"
bot.on(token + " " + prefix)
bot.finance()
bot.miscellaneous()
