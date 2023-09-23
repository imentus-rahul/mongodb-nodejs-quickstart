import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

// add data to DB using node js
export async function create_insertOne(obj: any) {

    try {
        const { name, age } = obj;
        let connectionString = process.env.DB_CONNECTION_STRING!;
        const DBclient = new MongoClient(connectionString);

        // Connect to the MongoDB cluster
        await DBclient.connect();

        // select a collection and appropriate query
        const result = await DBclient.db("some_database").collection('some_collection').insertOne({ name: name, age: age });
        console.log("🚀 ~ file: create.ts ~ line 18 ~ create ~ result from Mongo: ", result)
        console.log("🚀 ~ file: create.ts ~ line 18 ~ create ~ result.acknowledged from Mongo: ", result.acknowledged)
        console.log("🚀 ~ file: create.ts ~ line 18 ~ create ~ result.insertedId from Mongo: ", result.insertedId)

    } catch (error) {
        console.log("error while creating data: ", error)
    }

    return 0;
}

export async function create_insertMany(obj: any) {

    try {

        // const { name, age } = obj;
        let connectionString = process.env.DB_CONNECTION_STRING!;
        const DBclient = new MongoClient(connectionString);

        // Connect to the MongoDB cluster
        await DBclient.connect();

        const result = await DBclient.db("some_database").collection('some_collection').insertMany(obj);
        console.log("🚀 ~ file: create.ts ~ line 18 ~ create ~ result from Mongo: ", result)
        console.log("🚀 ~ file: create.ts ~ line 18 ~ create ~ result.acknowledged from Mongo: ", result.acknowledged)
        console.log("🚀 ~ file: create.ts ~ line 18 ~ create ~ result.insertedCount from Mongo: ", result.insertedCount)
        console.log("🚀 ~ file: create.ts ~ line 18 ~ create ~ result.insertedIds from Mongo: ", result.insertedIds)
    } catch (error) {
        console.log("error while creating data: ", error)
    }

    return 0;
}
