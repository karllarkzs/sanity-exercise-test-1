export default {
	name: "post",
	title: "Blog post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string"
		},
		{
			name: "slug",
			title: "slug",
			type: "slug",
			options: {
				source: "title",
				maxLenght: 100
			}
		},
			{
				name: "publishedDate",
				title: "Published Date",
				type: "datetime"
			},
			{
				name: "banner",
				title: "banner",
				type: "image",
				options: {
					hotspot: true
				}
			},
		{
			name: "excerpt",
			title: "Excerpt",
			type: "markdown"
		},
		{
			name: "author",
			title: "Author",
			type: "reference",
			to: { type:"author"}
		},
		{
			name: "category",
			title: "Category",
			type: "reference",
			to: {
						type: "category"
					}
				},
		{
			name: "description",
			title: "Description",
			type: "markdown"
		},
		{
			name: "metaTitle",
			title: "Meta Title",
			type: "string"
		}
	]
}
