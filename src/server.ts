import * as express from 'express';
import bodyParser = require('body-parser');
import * as path from 'path';
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
      res.status(results.status).send(results.message);
    });

    if (process.env.NODE_ENV === 'production') {
      // Serve any static files
      app.use(express.static(path.join(__dirname, 'client/build')));

      // Handle React routing, return all requests to React app
      app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
      });
    }

    app.listen(PORT, () => {
      console.log(`Server is running in new http://localhost:${PORT}`);
    });
  })
  .catch(console.error);
