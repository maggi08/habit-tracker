import TelegramBot from 'node-telegram-bot-api';
import EnvVars from '@src/constants/EnvVars';

const token = EnvVars.Telegram.token; // Replace with your own bot token

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const bot = new TelegramBot(token, { polling: true });

console.log(bot);
