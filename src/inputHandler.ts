import * as functions from '@google-cloud/functions-framework';
import axios from 'axios';
import { baseTeleBotURL as teleURL } from './urls';

functions.http('testFunction', (req: functions.Request, res: functions.Response) => {
  const updateMessage = req.body.message.from;
  const chatID = updateMessage.id;
  const user = updateMessage.username;
  console.log('Message received from ' + chatID + '=> @' + user);

  const message = "This is a test message. Hello there @" + user + "!";
  const options = {
    chat_id: chatID,
    text: message
  };

  axios.post(teleURL+"/sendMessage", options)
    .then(function(response){
      console.log(response);
      res.send({ status: 'Ok!'});
    })
    .catch(function (error){
      console.log(error);
      res.send("Something went wrong here.");
    })
})
