- https://www.mongodb.com/docs/mongodb-shell/install/
- mongosh "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/aggregations?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --tls -u m121 -p aggregations

- mongo "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/aggregations?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl -u m121 -p aggregations --norc

- show dbs
- show collections
- db.movies.findOne()
- db.movies.aggregate(pipeline).itcount()
- db.movies.aggregate(myPipeline).itcount()
- db.movies.findOne({title: "Life Is Beautiful"}, { _id: 0, cast: 1, writers: 1})