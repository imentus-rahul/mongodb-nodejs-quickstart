import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

// read data from DB using node js
// findOne using query
export async function update_updateOne(obj: any) {
    try {
        let connectionString = process.env.DB_CONNECTION_STRING!;
        const DBclient = new MongoClient(connectionString);

        // Connect to the MongoDB cluster
        await DBclient.connect();

        // upsert = update + insert // if not available, insert a new one
        const result = await DBclient.db("some_database").collection('some_collection').updateOne(obj.searchData, { $set: obj.updateData }, { upsert: true });
        if (result) {
            console.log("🚀 ~ file: update.ts ~ line 18 ~ update ~ result from Mongo: ", result)
            console.log("🚀 ~ file: update.ts ~ line 18 ~ update ~ result.acknowledged from Mongo: ", result.acknowledged)
            console.log("🚀 ~ file: update.ts ~ line 18 ~ update ~ result.modifiedCount from Mongo: ", result.modifiedCount)
            console.log("🚀 ~ file: update.ts ~ line 18 ~ update ~ result.upsertedId from Mongo: ", result.upsertedId)
            console.log("🚀 ~ file: update.ts ~ line 18 ~ update ~ result.upsertedCount from Mongo: ", result.upsertedCount)
            console.log("🚀 ~ file: update.ts ~ line 18 ~ update ~ result.matchedCount from Mongo: ", result.matchedCount)
            return 0;
        }

    } catch (error) {
        console.log("error while creating data: ", error)
        return null;
    }

}

export async function update_updateMany(obj: any) {
    try {
        let connectionString = process.env.DB_CONNECTION_STRING!;
        const DBclient = new MongoClient(connectionString);

        // Connect to the MongoDB cluster
        await DBclient.connect();

        const result = await DBclient.db("some_database").collection('some_collection').updateMany(obj.searchData, { $set: obj.updateData }, { upsert: true });
        if (result) {
            console.log("🚀 ~ file: update.ts ~ line 18 ~ update ~ result from Mongo: ", result)
            console.log("🚀 ~ file: update.ts ~ line 18 ~ update ~ result.acknowledged from Mongo: ", result.acknowledged)
            console.log("🚀 ~ file: update.ts ~ line 18 ~ update ~ result.modifiedCount from Mongo: ", result.modifiedCount)
            console.log("🚀 ~ file: update.ts ~ line 18 ~ update ~ result.upsertedId from Mongo: ", result.upsertedId)
            console.log("🚀 ~ file: update.ts ~ line 18 ~ update ~ result.upsertedCount from Mongo: ", result.upsertedCount)
            console.log("🚀 ~ file: update.ts ~ line 18 ~ update ~ result.matchedCount from Mongo: ", result.matchedCount)
            return 0;
        }

    } catch (error) {
        console.log("error while creating data: ", error)
        return null;
    }

}