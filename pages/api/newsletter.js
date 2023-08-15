import {MongoClient} from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({message: 'Invalid email address.'})

      return;
    }

    const client = await MongoClient.connect('mongodb+srv://bogdan_mykhailov:TfZnqFASlkvaEyTZ@cluster0.nsvvfdc.mongodb.net/?retryWrites=true&w=majority')
    const db = client.db('majestic');

    await db.collection('emails').insertOne({ email: userEmail });

    await client.close();

    res.status(201).json({message: 'Signed up!'})
  }
}

export default handler;
