const functions = require('@google-cloud/functions-framework');

functions.http('helloHttp', (req: any, res: any) => {
  res.send(`Hello ${req.query.name || req.body.name || 'World'}!`);
});
