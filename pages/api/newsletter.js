import {MongoClient} from 'mongodb';

async function connectDatabase() {
  return await MongoClient.connect('mongodb+srv://bogdan_mykhailov:TfZnqFASlkvaEyTZ@cluster0.nsvvfdc.mongodb.net/?retryWrites=true&w=majority');
}

async function insertDocument(client, document) {
  const db = client.db('majestic');

  await db.collection('emails').insertOne(document);
}

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({message: 'Invalid email address.'})

      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (err) {
      res.status(500).json({ message: 'Connecting to database failed.' });
      return;
    }

    try {
      await insertDocument(client, {email: userEmail})
      await client.close();
    } catch (err) {
      res.status(500).json({ message: 'Inserting data failed.' });
      return;
    }


    res.status(201).json({message: 'Signed up!'})
  }
}

export default handler;
