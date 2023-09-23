import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

// read data from DB using node js
// findOne using query
export async function read_findOne(obj: any) {
    try {
        const { name } = obj; // name to find
        let connectionString = process.env.DB_CONNECTION_STRING!;
        const DBclient = new MongoClient(connectionString);

        // Connect to the MongoDB cluster
        await DBclient.connect();

        const result = await DBclient.db("some_database").collection('some_collection').findOne({ name: name });
        if (result) {
            console.log("🚀 ~ file: read.ts ~ line 18 ~ read ~ result from Mongo: ", result)
            console.log("🚀 ~ file: read.ts ~ line 18 ~ read ~ result?._id from Mongo: ", result?._id)
        }

        return result;

    } catch (error) {
        console.log("error while creating data: ", error)
        return null;
    }

}

export async function read_find(obj: any) {
    try {
        const { name } = obj; // name to find
        let connectionString = process.env.DB_CONNECTION_STRING!;
        const DBclient = new MongoClient(connectionString);

        // Connect to the MongoDB cluster
        await DBclient.connect();

        // .find returns cursor
        const cursor = DBclient.db("some_database").collection('some_collection').find({ name: name });  // .sort({ last_review: -1 }).limit(maximumNumberOfResults);
        const result = await cursor.toArray();
        if (result) {
            console.log("🚀 ~ file: read.ts ~ line 18 ~ read ~ result from Mongo: ", result)
        }

        return result;

    } catch (error) {
        console.log("error while creating data: ", error)
        return null;
    }

}
