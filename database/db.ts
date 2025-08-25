import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


async function connectBD() {
    try {
    const URL = process.env.MONGO_URI || "";
    await mongoose.connect(URL);
    console.log(`Database Connected to MongoDB ${URL}`); 
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error connecting to MongoDB:", error.message);
        }
    }
}

export default connectBD;













// let client: MongoClient;

// export async function connectDB() {
//     const uri = process.env.MONGO_URI;
//     const dbName = process.env.MONGO_DB_NAME;

//     client = new MongoClient(uri!);
//     await client.connect();

//     const db = dbName ? client.db(dbName) : client.db();
//     console.log(" Connected to MongoDB");

//     return db;
// }
