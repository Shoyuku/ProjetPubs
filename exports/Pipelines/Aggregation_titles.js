db.getCollection("titles").aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$lookup: // Equality Match
			{
			    from: "titleauthor",
			    localField: "title_id",
			    foreignField: "title_id",
			    as: "Titleauthor"
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
			$lookup: // Equality Match
			{
			    from: "roysched",
			    localField: "title_id",
			    foreignField: "title_id",
			    as: "Roysched"
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

		// Stage 3
		{
			$lookup: // Equality Match
			{
			    from: "sales",
			    localField: "title_id",
			    foreignField: "title_id",
			    as: "Sales"
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

		// Stage 4
		{
			$out: "Titles"
		},

	]

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
