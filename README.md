# Clyde.js

A [Finance.io](https://npmjs.com/package/finance.io) Discord Bot Wrapper



[![npm (scoped)](https://img.shields.io/npm/v/finance.io.svg)](https://www.npmjs.com/package/finance.io)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/finance.io.svg)](https://www.npmjs.com/package/finance.io)

<a href="https://nodei.co/npm/clyde.js/"><img src="https://nodei.co/npm/clyde.js.png?downloads=true&stars=true" alt="NPM info" /></a>


## Installation 

`npm i clyde.js`


### Usage 

```
const bot = require('clyde.js')

bot.on('<YOUR_BOT_TOKEN>')
```


### Customize

You Can Customize The Prefix Settings.
``` 
const bot = require('clyde.js')

bot.on('<YOUR_BOT_TOKEN> <PREFIX>')
```


### Example 

Here's Some Example
```
const bot = require('clyde.js')
const token = YOUR_BOT_TOKEN
const prefix = "!"
bot.on(token + " " + prefix)
bot.finance() 
bot.miscellaneous() 

```

## Customize Functions

#### Financial 
```
bot.finance()
```
#### miscellaneous
```
bot.miscellaneous()
```

### Commands 

- Get Finance 
  - get <STOCK_QUOTE>
  - getnspa <STOCK_QUOTE>
  - getfinancial <STOCK_QUOTE>
  - getcompany <STOCK_QUOTE>

- Miscellaneous `OPTIONAL`
  - Help
  - ping
  - uptime

---------------------------


## Author

- [@joeleeofficial](https://github.com/joeleeofficial)
   - [Contact Joe](mailto:tojoeleeofficial@gmail.com)
   - [Get Support](https://discord.gg/hZMCwDXfQb)
   - [Twitter](https://twitter.com/itsjoetime2008)

- [@financejs](https://github.com/financejs)
   - [finance.io](https://npmjs.com/package/finance.io)
   - [Website](https://finance.js.org)

#### Links

- [discord.js](https://discord.js.org)

- [finance.io](https://finance.js.org)

------------------


### Need Help ? 

[Join finance.js Discord Community Now](https://discord.gg/hZMCwDXfQb)

<a href="https://discord.gg/hZMCwDXfQb"><img src="https://discordapp.com/api/guilds/793118787460399154/embed.png?style=banner2"></a>
