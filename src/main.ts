const incomingWebhookUrl: string = PropertiesService.getScriptProperties().getProperty('incoming_webhook_url')
const userToken: string = PropertiesService.getScriptProperties().getProperty('user_token')
const botUserToken: string = PropertiesService.getScriptProperties().getProperty('bot_user_token')
const channelId: string = 'C0239BF5HNJ'

const postMessages = () => {
    postMessageWithWebhookUrl()
    postUserMessage()
    postBotUserMessage()
}

const postMessageWithWebhookUrl = () => {
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        payload: JSON.stringify({
            text: 'message with webhook url'
        }),
        muteHttpExceptions: true
    }
    Logger.log(UrlFetchApp.fetch(incomingWebhookUrl, options).getContentText())
}

const postUserMessage = () => {
    postMessage(userToken)
}

const postBotUserMessage = () => {
    postMessage(botUserToken)
}

const postMessage = (token: string) => {
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
        method: 'post',
        payload: {
            token: token,
            channel: channelId,
            text: 'message'
        },
        muteHttpExceptions: true
    }
    Logger.log(UrlFetchApp.fetch('https://slack.com/api/chat.postMessage', options).getContentText())
}