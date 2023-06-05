import dotenv from 'dotenv';
const keys = dotenv.config();

if(keys.error){
    throw keys.error;
}
console.log("Successfully parsed the following keys:")
console.log(keys.parsed);

if(process.env.BOT_ID == "insert bot id here"){
    console.warn("Telegram Bot ID not set. Please set it in '.env'.");
}

if(process.env.GCAL_ID == "insert gcal id here"){
    console.warn("Google Calendar not set. Please set it in '.env'.");
}

if(process.env.GAPI_KEY == "insert gapi key here"){
    console. warn("Google API Key not set.  Please set it in '.env'.")
}

export const baseTeleBotURL = "https://api.telegram.org/bot" + process.env.BOT_ID;
export const baseCalURL = "https://www.googleapis.com/calendar/v3/calendars/" + process.env.GCAL_ID;
export const calEventsURL = baseCalURL + "/events" + "?key=" + process.env.GAPI_KEY;

console.log("Loaded base Telegram Bot URL at: " + baseTeleBotURL);
console.log("Loaded base Google Calendar URL at: " + baseCalURL);
console.log("Loaded Calendar Events URL at: " + calEventsURL);