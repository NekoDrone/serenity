import * as functions from '@google-cloud/functions-framework';
import axios from 'axios';
import { baseTeleBotURL as teleURL } from './urls';
import { teleResponse } from './types';

functions.http('testFunction', (req: functions.Request, res: functions.Response) => {
  const updateMessage = req.body.message;

  const chatID: string = updateMessage.from.id;
  const username: string = updateMessage.from.username;
  console.log('Message received from @' + username + ' with chatID=' + chatID);

  const requestMessage: string = updateMessage.text;
  console.log("Incoming message received '"+ requestMessage +"'");

  function sendMessage(sendPackage: teleResponse){
    axios.post(teleURL+"/sendMessage", sendPackage)
      .then(function(response){
        console.log("Message successfully sent back!");
        res.send({ status: 'Ok!'});
      })
      .catch(function (error){
        console.log(error);
        res.send("Something went wrong here.");
      })
  }
  
  var responseMessage = "";

  if(requestMessage.startsWith('/')){ //TODO: Change this to an array access of possible commands, then filter it based on that. Should be faster.

    if(requestMessage.endsWith('start')){
      if(username == "SylfrTan"){
        responseMessage += "Hi there Syl! This is a confirmation that the '/start' command is working properly. \n\nThis is also a test to see if the newline escape works as intended."
      }
      else {
        responseMessage += "Hi there @" + username + "! Thank you for your interest in using Serenity.\n\nUnfortunately, I am unable to allow you access to my functions, as they are meant for private use only. \n\nIf you wish to use a version of this bot yourself, please see my source code and how to replicate my functions at https://github.com/NekoDrone/serenity. \n\nAll the best!";
      }
    }

    var responsePackage = new teleResponse(chatID, responseMessage);
    sendMessage(responsePackage);
  }
  else {
    console.log("No valid command received.");
    res.send({ status: "No valid command received."});
  }

})