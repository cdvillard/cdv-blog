import CMS from '@staticcms/core';

const config = {
	backend: {
		name: 'github',
		repo: 'cdvillard/cdv-blog',
		branch: 'main'
	},
	logo_url: '/safari-pinned-tab.svg',
	media_folder: 'public/assets',
	public_folder: 'assets',
	site_url: 'https://charlesvillard.co',
	display_url: 'https://charlesvillard.co',
	collections: [
		{
			name: 'blog',
			label: 'Blog',
			folder: 'src/pages/blog/posts',
			create: true,
			slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
			summary: "{{pubDate}} - {{title}} - Draft: {{draft}}",
			sortable_fields: {
				fields:['pubDate'],
				default:{
					field: 'pubDate',
					direction: 'Descending'
				}
			},
			fields: [
				{
					label: 'Layout',
					name: 'layout',
					widget: 'hidden',
					default: '../layouts/BlogPost.astro'
				},
				{label: "Title", name: "title", widget: "string"},
				{label: "Description", name: "description", widget: "string"},
				{label: "Publish Date", name: "pubDate", widget: "datetime"},
				{label: "Draft", name: "draft", widget: "boolean", default: true},
				{label: "RSS Only", name:"rssOnly",widget:"boolean",default:false},
				{label: "Featured Image", name: "featuredImage", widget: "image" },
				{label: "Featured Image Alt", name: "featuredImageAlt", widget: "string" },
				{label: "Body", name: "body", widget: "markdown"},
			]
		}
	]
};

CMS.init({config})