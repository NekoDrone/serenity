import * as functions from '@google-cloud/functions-framework';

functions.http('helloHttp', (req: functions.Request, res: functions.Response) => {
  res.send(`Hello ${req.query.name || req.body.name || 'World'}!`);
});
