// import { MongoClient } from '../../express_backend/node_modules/mongodb/';
// import dotenv from 'dotenv';
// dotenv.config();

// async function main() {
//     try {
//   let connectionString = "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/aggregations?replicaSet=Cluster0-shard-0";
//   const DBclient = new MongoClient(connectionString);

//   // Connect to the MongoDB cluster
//   await DBclient.connect();

//   let custom_pipeline = [
//     {
//       $match: { year: 1913 }
//     }
//   ]

//   let aggregationCursor = DBclient.db("movies").collection('movies').aggregate(custom_pipeline);
//   console.log("🚀 ~ file: validateLab1.ts ~ line 13 ~ aggregationCursor", aggregationCursor)

//   let aggregationsLength = (await aggregationCursor.toArray()).length;
//   console.log("🚀 ~ file: validateLab1.ts ~ line 15 ~ aggregationsLength", aggregationsLength)
// }
// catch (error) {
//   console.log("error: ", error)
// }

// }

// main()


// let custom_pipeline = [
//   {
//     $match: { year: 1913 }
//   }
// ]

// var pipeline = [
//   {
//     $match: {
//       $and:[
//         {"imdb.rating": {$gte:7}},
//         {"genres":{$nin:["Crime", "Horror"]}},
//         {"rated":{$in:["PG", "G"]}},
//         {"languages": {$all: ["English", "Japanese"]}}
//       ]
//     }
//   }
// ]


var validateLab1 = pipeline => {
  let aggregations = db.getSiblingDB("aggregations")
  if (!pipeline) {
    print("var pipeline isn't properly set up!")
  } else {
    try {
      var result = aggregations.movies.aggregate(pipeline).toArray().length
      // print(result)

      let sentinel = result
      let data = 0
      while (result != 1) {
        data++
        result = result % 2 === 0 ? result / 2 : result * 3 + 1
      }
      if (sentinel === 23) {
        print("Answer is", data)
      } else {
        print("You aren't returning the correct number of documents")
      }
    } catch (e) {
      print(e.message)
    }
  }
}
