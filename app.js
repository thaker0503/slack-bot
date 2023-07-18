const { App } = require('@slack/bolt');
require('dotenv').config();

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
});

async function handleAppMention({ event, context, client, say }) {
    const { user, text, ts } = event;
    // console.log(event)
    const mentionRegex = new RegExp(`<@${app.botUserId}>`, 'g');
    const cleanedText = text.split(mentionRegex).join('').trim();
    // console.log(text)
    // console.log(cleanedText)

    const replyText = `Hello <@${user}>! I received your message: '${cleanedText}'`;

    await say({
        text: replyText,
        thread_ts: ts,
    });
}

app.event('app_mention', handleAppMention);

app.event('url_verification', async ({ event, context, client, say }) => {
    console.log(event);
});

// (async () => {
//     try {
//         await app.start(5001);
//         console.log(`⚡️ Slack Bolt app is running on port 5001!`);
//     } catch (error) {
//         console.error('Error starting the bot:', error);
//     }
// })();
module.exports = app;