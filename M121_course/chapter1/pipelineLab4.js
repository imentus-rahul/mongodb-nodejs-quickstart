let pipeline2 = [
    {
        $project: {
            _id: 0,
            "cast": 1,
            "title": 1,
            "originalWriters": "$writers",
            "specialWriters": {
                $map: {
                    input: "$writers",
                    as: "writer",
                    in: {
                        $arrayElemAt: [
                            {
                                $split: ["$$writer", " ("]
                            },
                            0
                        ]
                    }
                }
            },
            "newWriter": {
                $map: {
                    input: "$writers",
                    as: "writer",
                    in: {
                        "target": {
                            $arrayElemAt: [
                                {
                                    $split: ["$$writer", " ("]
                                },
                                0
                            ]
                        }
                    }
                }
            },
            "commonToBoth": {
                $setIntersection: ["$specialWriters", "$cast"]
            }
        },
        $match: { "$commonToBoth": true }
    }
]

let pipeline1 = [
    {
        $project: {
            _id: 0,
            "cast": 1,
            "title": 1,
            "writers": {
                $map: {
                    input: "$writers",
                    as: "writer",
                    in: "$$writer"
                }
            }
        }
    }
]

var pipeline3 = [
    {
        $match: {
            "writers": { $elemMatch: { $exists: true } },
            "cast": { $elemMatch: { $exists: true } },
            "directors": { $elemMatch: { $exists: true } },
        }
    },
    {
        $project: {
            "oldWriters": "$writers",
            "writers": {
                $map: {
                    input: "$writers",
                    as: "writer",
                    in: {
                        $and: [
                            {
                                $contains: "("
                            },
                            {
                                $arrayElemAt: [
                                    {
                                        $split: ["$$writer", " ("]
                                    },
                                    0
                                ]
                            }
                        ]
                    }
                }
            },
            "cast": 1,
            "directors": 1,
            "commonToAll": { $setIntersection: ["$writers", "$cast", "$directors"] }
        }
    }
];

// ,
// 	{ $project: 
// 	    { "laborOfLove": { $gt: [ { $size: { $setIntersection: ["$writers", "$cast", "$directors"] } }, 0 ] } }
// 	},
//     { $match : { "laborOfLove" : true } }


var pipeline = [
    {
        $match: {
            "writers": { $elemMatch: { $exists: true } },
            "cast": { $elemMatch: { $exists: true } },
            "directors": { $elemMatch: { $exists: true } }
        }
    },
    {
        $project: {
            "oldWriters": "$writers",
            "writers": {
                $map: {
                    input: "$writers",
                    as: "writer",
                    in: {
                        $arrayElemAt: [
                            { $split: ["$$writer", " ("] },
                            0
                        ]
                    }
                }
            },
            "cast": 1,
            "directors": 1
        }
    },
    {
        $project:
            { "laborOfLove": { $gt: [{ $size: { $setIntersection: ["$writers", "$cast", "$directors"] } }, 0] } }
    },
    { $match: { "laborOfLove": true } }
];


let myPipeline = [
    {
        $match: {
            "writers": { $in: ["("] },
        }
    },
    {
        $project: {
            _id: 0,
            "cast": 1,
            "title": 1,
            "originalWriters": "$writers",
            "specialWriters": {
                $map: {
                    input: "$writers",
                    as: "writer",
                    in: {
                        $arrayElemAt: [
                            {
                                $cond: [{"$$writer":{$in: ["("]}}, {$split: ["$$writer", " ("]} ] 
                            },
                            0
                        ]
                    }
                }
            },
            // "commonTospecialWritersAndCast": {
            //     $setIntersection: ["$specialWriters", "$cast"]
            // }
        },
    },
    {
        $match: {
            // "commonTospecialWritersAndCast": { $elemMatch: { $exists: true } },
            "specialWriters": { $elemMatch: { $exists: true } },
        }
    }
]
