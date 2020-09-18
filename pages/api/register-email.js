import { MongoClient, Db } from "mongodb";
import url from "url";

let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb;
  } else {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const dbName = url.parse(uri).pathname.substr(1);

    const db = client.db(dbName);

    cachedDb = db;

    return db;
  }
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default async (req, res) => {
  const { email } = req.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection("news");

  if (validateEmail(email)) {
    await collection.insertOne({
      email,
      subscribeAt: new Date(),
    });
    return res.status(201).json({ created: true });
  } else {
    return res.status(200).json({ created: false });
  }
};
