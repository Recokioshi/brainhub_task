import * as express from 'express';
import { isRequestValid } from './addEvent';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.post('/addEvent', (req, res) => {
  var isValid = isRequestValid(req.body);
  res.sendStatus(isValid ? 200 : 500);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running in new http://localhost:${PORT}`);
});
