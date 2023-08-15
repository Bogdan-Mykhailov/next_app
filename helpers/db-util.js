import { MongoClient } from "mongodb";
import { DB_NAME, MONGODB_URL } from "@/constants";

export async function connectDatabase() {
  return await MongoClient.connect(MONGODB_URL);
}

export async function insertDocument(client, collection, document) {
  const db = client.db(DB_NAME);

  return await db.collection(collection).insertOne(document);
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db(DB_NAME);

  return await db
    .collection(collection)
    .find()
    .sort(sort)
    .toArray();
}
