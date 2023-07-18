const { App } = require('@slack/bolt');
require('dotenv').config();

const expressApp = require('express')();

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
});

async function handleAppMention({ event, context, client, say }) {
    const { user, text, ts } = event;
    console.log(event)
    const mentionRegex = new RegExp(`<@${app.botUserId}>`, 'g');
    const cleanedText = text.split(mentionRegex).join('').trim();

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

expressApp.get('/', (req, res) => {
    (async () => {
        try {
            await app.start();
            console.log(`⚡️ Slack Bolt app is running on port 5001!`);
        } catch (error) {
            console.error('Error starting the bot:', error);
        }
    })();
    res.send('Hello World!')
})

module.exports = expressApp;
// module.exports = async () => {
//     try {
//         await app.start(5001);
//         console.log(`⚡️ Slack Bolt app is running on port 5001!`);
//     } catch (error) {
//         console.error('Error starting the bot:', error);
//     }
// }
// module.exports = app;