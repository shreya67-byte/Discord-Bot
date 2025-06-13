const{Client,GatewayIntentBits}=require("discord.js");
const client=new Client({intents:[GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
]});
client.on("messageCreate",(message)=>{
    if(message.author.bot) return;
    message.reply(
        {
        content:"Hi from Bot",
        }
    )
   
});
client.login(
    "Your_token(gitHub dont allow to share such info"
);

/*I created a Discord bot using Node.js and the Discord API.

I registered the bot in the Discord Developer Portal.

I connected the bot to my Discord server using its token.

I set up a basic project and wrote the bot’s logic in JavaScript.

I gave the bot permission to read and reply to messages.

I made the bot reply with “Hi from Bot” when someone sends a message.

I tested it on a real server to see how it responds.

I ensured the bot doesn’t reply to other bots by filtering them.

I understood how event-based programming works in Discord bots.

I learned about “intents” and how bots access specific data like messages.

I explored how APIs work in real-time apps.

I learned how bots communicate over Discord using WebSocket through discord.js.

I got hands-on with Node.js for backend scripting.

I understood the importance of securing the bot token.

I successfully built, connected, and tested a working Discord bot.*/
