🤖 Discord Bot using Node.js & discord.js

This project is a simple yet functional Discord Bot built using Node.js and the Discord.js library. It listens to messages in your Discord server and replies with a friendly response — perfect for learning the foundations of bot development.

🚀 What This Bot Can Do

- Connects to a real Discord server
- Replies with "Hi from Bot" when a user sends any message
- Ignores messages sent by other bots
- Demonstrates use of intents, event listeners, and environment variables
- Teaches real-time API interaction using Discord’s WebSocket protocol
- Built and tested on an actual server with working message interaction

🧠 What I Learned

✅ How to register a bot on the Discord Developer Portal  
✅ How to create and set up a new Discord server  
✅ Understanding of intents in Discord API  
✅ How event-driven programming works with messageCreate  
✅ Using Node.js for backend scripting  
✅ Hands-on with environment variable handling using .env  
✅ Importance of securing bot tokens (GitHub blocked a push due to exposed token!)  
✅ How to test bots in a live Discord server

🏗️ Project Structure

discord-bot/
├── index.js            # Main bot logic
├── .env                # Your bot token (keep secret)
├── .gitignore          # Prevents sensitive files from being committed
└── README.md           # Project documentation

⚙️ Tech Stack

- Node.js – Runtime environment  
- Discord.js – Library to interact with Discord API  
- dotenv – For environment variable handling  
- Discord Developer Portal – For bot creation and permissions

🔧 Setup Guide

1. Register Your Bot

Go to Discord Developer Portal: https://discord.com/developers/applications  
Click "New Application", name your bot, go to the "Bot" tab, and add a bot. Copy the token.

2. Invite Bot to Your Server

Use this URL (replace CLIENT_ID):
https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=3072

3. Code the Bot

Create index.js:

const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply({ content: "Hi from Bot" });
});

client.login(process.env.BOT_TOKEN);

Create .env:

BOT_TOKEN=your_discord_bot_token_here

Create .gitignore:

.env
node_modules/

🛠️ Run the Bot

npm install discord.js dotenv  
node index.js

Go to your server, send a message — your bot will reply with:

Hi from Bot

🔐 Security Best Practices

- Never share your bot token in code.
- Always use .env and .gitignore.
- If you push a secret by mistake, regenerate the token immediately.
- GitHub may block your push if secrets are exposed.

🔮 Future Enhancements

- Add custom commands (!joke, !weather, !ping)
- Use slash commands
- Add embed messages
- Store user data in a database (MongoDB or Firebase)
- Add role-based replies or DM support

👩‍💻 Author

Shreya Thorat  
Developer | Discord Enthusiast | Learning Node.js  
GitHub: https://github.com/shreya67-byte

📄 License

This project is licensed under the MIT License.
