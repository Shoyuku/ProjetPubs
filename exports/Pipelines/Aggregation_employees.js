db.getCollection("employee").aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$lookup: // Equality Match
			{
			    from: "jobs",
			    localField: "job_id",
			    foreignField: "job_id",
			    as: "Jobs"
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
			$out: "Employee"
		},

	]

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
