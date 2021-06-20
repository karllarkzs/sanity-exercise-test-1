export default {
	name: "author",
	title: "Author",
	type: "document",
	fields: [
		{
		name: "name",
		title: "Name",
		type: "string"
	},
	{
		name: "position",
		title: "Position",
		type: "string"
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
		name: "biography",
		title: "Biography",
		type: "text"
	}
]
}
