import { bot_id } from "./creds";
import { gcal_id } from "./creds";

export const baseTeleBotURL = "https://api.telegram.org/bot" + bot_id;
export const baseCalURL = "https://www.googleapis.com/calendar/v3/calendars/" + gcal_id;