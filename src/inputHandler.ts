import * as functions from '@google-cloud/functions-framework';
import axios from 'axios';
import { baseTeleBotURL as teleURL } from './urls';

functions.http('helloHttp', (req: functions.Request, res: functions.Response) => {
  function sendResponse(response: any){

  }
  const updateMessage = req.body.message;
  var chatID = updateMessage.chat.id;
})
