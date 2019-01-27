db.getCollection("stores").aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$lookup: // Equality Match
			{
			    from: "discounts",
			    localField: "stor_id",
			    foreignField: "stor_id",
			    as: "Discounts"
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
			$out: "Stores"
		},

	]

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
