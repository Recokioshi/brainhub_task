import * as express from 'express';
import bodyParser = require('body-parser');
import { processRequest } from './addEvent';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.post('/addEvent', (req, res) => {
  console.log(`got ${JSON.stringify(req.body)}`);
  const results = processRequest(req.body);
  res.status(results.valid ? 200 : 500).send(results.valid ? 'OK' : results.messaage);
});

app.listen(PORT, () => {
  console.log(`Server is running in new http://localhost:${PORT}`);
});
