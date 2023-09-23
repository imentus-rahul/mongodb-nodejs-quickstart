import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

// delete data from DB using node js
// findOne using query
export async function delete_deleteOne(obj: any) {
    try {
        let connectionString = process.env.DB_CONNECTION_STRING!;
        const DBclient = new MongoClient(connectionString);

        // Connect to the MongoDB cluster
        await DBclient.connect();

        const result = await DBclient.db("some_database").collection('some_collection').deleteOne(obj.searchData);
        if (result) {
            // console.log("🚀 ~ file: update.ts ~ line 18 ~ delete ~ result from Mongo: ", result)
            console.log("🚀 ~ file: update.ts ~ line 18 ~ delete ~ result.acknowledged from Mongo: ", result.acknowledged)
            console.log("🚀 ~ file: update.ts ~ line 18 ~ delete ~ result.deletedCount from Mongo: ", result.deletedCount)
            return 0;
        }

    } catch (error) {
        console.log("error while creating data: ", error)
        return null;
    }

}

export async function delete_deleteMany(obj: any) {
    try {
        let connectionString = process.env.DB_CONNECTION_STRING!;
        const DBclient = new MongoClient(connectionString);

        // Connect to the MongoDB cluster
        await DBclient.connect();

        const result = await DBclient.db("some_database").collection('some_collection').deleteMany(obj.searchData);
        if (result) {
            console.log("🚀 ~ file: update.ts ~ line 18 ~ delete ~ result from Mongo: ", result)
            console.log("🚀 ~ file: update.ts ~ line 18 ~ delete ~ result.acknowledged from Mongo: ", result.acknowledged)
            console.log("🚀 ~ file: update.ts ~ line 18 ~ delete ~ result.deletedCount from Mongo: ", result.deletedCount)
            // console.log("🚀 ~ file: update.ts ~ line 18 ~ delete ~ result.modifiedCount from Mongo: ", result.modifiedCount)
            // console.log("🚀 ~ file: update.ts ~ line 18 ~ delete ~ result.upsertedId from Mongo: ", result.upsertedId)
            // console.log("🚀 ~ file: update.ts ~ line 18 ~ delete ~ result.upsertedCount from Mongo: ", result.upsertedCount)
            // console.log("🚀 ~ file: update.ts ~ line 18 ~ delete ~ result.matchedCount from Mongo: ", result.matchedCount)
            return 0;
        }

    } catch (error) {
        console.log("error while creating data: ", error)
        return null;
    }

}