var favorites = [
    "Sandra Bullock",
    "Tom Hanks",
    "Julia Roberts",
    "Kevin Spacey",
    "George Clooney"
];

var pipeline = [
    {
        $match: {
            $and: [
                { "countries": { $in: ["USA"] } },
                { "tomatoes.viewer.rating": { $gte: 3 } },
                { "cast": { $in: favorites } }
            ]
        }
    },
    {
        $project: {
            _id: 0,
            "title": 1,
            "cast": 1,
            "tomatoes.viewer.rating": 1
        }
    },
    {
        $addFields: {
            "num_favs": {
                $size: {
                    $setIntersection: ["$cast", favorites]
                }
            }
        }
    },
    {
        $sort:{"num_favs":-1, "tomatoes.viewer.rating":-1 , "title":-1}
    },
    {
        $limit:25
    },
    {
        $skip: 24,
    }
]

// "favouritesRes": { $exists: true }
// count of favouritesRes: { $size: "$favouritesRes" }


// "count": {
//     $size: {
//         $setIntersection: [favorites, '$cast']
//     }
// }

// {
//     $match: {
//         "count": { $gt: 0 }
//     }
// }