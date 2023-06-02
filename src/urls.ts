const dotenv = require('dotenv');
const keys = dotenv.config();

if(keys.error){
    throw keys.error;
}
console.log("Successfully parsed the following keys:")
console.log(keys.parsed);

const baseTeleBotURL = "https://api.telegram.org/bot" + process.env.BOT_ID;
const baseCalURL = "https://www.googleapis.com/calendar/v3/calendars/" + process.env.GCAL_ID;

if(baseTeleBotURL == "https://api.telegram.org/botinsert bot id here"){
    console.warn("Telegram Bot ID not set. Please set it in '.env'.");
}

if(baseCalURL == "https://www.googleapis.com/calendar/v3/calendars/insert gcal id here"){
    console.warn("Google Calendar not set. Please set it in '.env'.");
}

if(process.env.GAPI_KEY == "insert gapi key here"){
    console. warn("Google API Key not set.  PLease set it in '.env'.")
}

console.log("Loaded base Telegram Bot URL at: " + baseTeleBotURL);
console.log("Loaded base Google Calendar URL at: " + baseCalURL);