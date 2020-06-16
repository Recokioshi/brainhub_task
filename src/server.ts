import * as express from 'express';
import bodyParser = require('body-parser');
import { processRequest } from './addEvent';
import { MongoClient } from 'mongodb';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log('starting');
MongoClient.connect(String(process.env.DATABASE_URL), { useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected to Database');
    const db = client.db('events');
    const submissionsCollection = db.collection('submissions');

    app.post('/addEvent', async (req, res) => {
      console.log(`got ${JSON.stringify(req.body)}`);
      const results = await processRequest(req.body, submissionsCollection);

      res.status(results.valid ? 200 : 500).send(results.valid ? 'OK' : results.message);
    });

    app.get('/', (req, res) => {
      db.collection('submissions')
        .find()
        .toArray()
        .then((results) => {
          res.status(200).send(results);
        })
        .catch((error) => console.error(error));
      // ...
    });

    app.listen(PORT, () => {
      console.log(`Server is running in new http://localhost:${PORT}`);
    });
  })
  .catch(console.error);
