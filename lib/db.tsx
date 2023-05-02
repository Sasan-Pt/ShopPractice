import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://Unow3n2:Random110@cluster0.t426ynn.mongodb.net/DataBase?retryWrites=true&w=majority"
  );
  return client;
}
