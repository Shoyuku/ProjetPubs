db.getCollection("publishers").aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$lookup: // Equality Match
			{
			    from: "pub_info",
			    localField: "pub_id",
			    foreignField: "pub_id",
			    as: "Pub_info"
			}
			
			// Uncorrelated Subqueries
			// (supported as of MongoDB 3.6)
			// {
			//    from: "<collection to join>",
			//    let: { <var_1>: <expression>, …, <var_n>: <expression> },
			//    pipeline: [ <pipeline to execute on the collection to join> ],
			//    as: "<output array field>"
			// }
		},

		// Stage 2
		{
			$out: "Publishers"
		},

	]

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
