let pipeline = [
    {
        $project:
        {
            "titleSize": {
                $size: {
                    $split: ["$title", " "]
                }
            }
        }
    },
    {
        $match: { "titleSize": 1 }
    }
]