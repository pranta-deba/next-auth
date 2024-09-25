import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const dbConnection = async () => {
  if (db) {
    return db;
  }
  try {
    const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URL, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    db = client.db("learn-next-auth");
    return db;
  } catch (error) {
    console.log(error);
  }
};
