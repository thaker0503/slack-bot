## Slack Bot

# You can tag this bot in your channels and it will reply in the thread to that message

# Steps to run
- Take a pull and run following command: 

```
npm install
```

- Open terminal and run following command:

```
npm run dev
```

- Then run ngrok command

```
ngrok http 5001
```

- Then go to bot settings panel and in that Settings > Event Subscriptions
Add the ngrok url with '/slack/events' at last

For example: 

```
https://9d4c-122-172-97-91.ngrok-free.app/slack/events
```

Now you are good to go.

You can test your bot by installing it to your workspace and then run the following:
@{Bot Name} {your message}

For example: 

```
@Demo Bot Hello
```

Reponse in thread:

```
Hello @{UserName}! I received your message: '@Demo Bot hi'
```







