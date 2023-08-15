import {COLLECTIONS} from "@/constants";
import {connectDatabase, getAllDocuments, insertDocument} from "@/helpers/db-util";

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;
  try {
    client = await connectDatabase();
  } catch (err) {
    res.status(500).json({message: 'Connecting to database failed.'});
    return;
  }

  if (req.method === 'POST') {
    const {email, name, text} = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim === '' ||
      !text ||
      text.trim === ''
    ) {
      res.status(422).json({message: 'Invalid input.'});
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId
    };

    let result;
    try {
      result = await insertDocument(client, COLLECTIONS.COMMENTS, newComment);
      newComment._id = result.insertedId;

      res.status(201).json({message: 'Added comment.', comment: newComment});
    } catch (err) {
      res.status(500).json({message: 'Inserting data failed.'});
    }


  }
  if (req.method === 'GET') {

    try {
      const documents = await getAllDocuments(
        client,
        COLLECTIONS.COMMENTS,
        {_id: -1},
        {eventId})
      res.status(200).json({comments: documents});
    } catch (err) {
      res.status(500).json({message: 'Getting comments failed.'});
    }
  }
}

export default handler;
