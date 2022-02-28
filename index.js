import dotenv from 'dotenv';
import { Client, Intents } from 'discord.js';
import AIRequest from './services/AIRequest';

dotenv.config();
process.on('unhandledRejection', error =>
  console.error('Uncaught Promise Rejection', error)
);

const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', async () => {
    console.log('Ready!');
	// const fart = new AIRequest();
	// const ass = await fart.makeRequest('ass hole');
	// console.log(ass);
});

client.on('interactionCreate', async interaction => {
    // console.log(interaction);
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});

client.on('messageCreate', async message => {
    console.log(client.user);
    if (message.content === 'test') {
        console.log(message.member.nickname || message.author.username);
        await message.reply('pong');
    }
});

client.login(TOKEN);