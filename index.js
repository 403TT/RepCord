require("dotenv").config();         // Utilises the dotenv package and allows the .env file to load into the app
                                    // Also allows everything inside .env available in process.env

const { Client, GatewayIntentBits, Events } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] }); // Required for discord.js to work. Discord refers servers as "Guilds"

client.once(Events.ClientReady, (client)  => {            // Changed to ClientReady for modern workflow
    console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN); // Login using the .env token via client.login()