import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

let client: MongoClient;

export async function connectDB() {
    const uri = process.env.MONGO_URI;
    const dbName = process.env.MONGO_DB_NAME;

    client = new MongoClient(uri!);
    await client.connect();

    const db = dbName ? client.db(dbName) : client.db();
    console.log(" Connected to MongoDB");

    return db;
}
