declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"posts": {
"2023-02-05-jamstack-conf-2022-one-devs-recap.md": {
	id: "2023-02-05-jamstack-conf-2022-one-devs-recap.md";
  slug: "2023-02-05-jamstack-conf-2022-one-devs-recap";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2023-02-05-keeping-a-record.md": {
	id: "2023-02-05-keeping-a-record.md";
  slug: "2023-02-05-keeping-a-record";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2023-02-05-on-the-way-home-from-jamstackconf-2022.md": {
	id: "2023-02-05-on-the-way-home-from-jamstackconf-2022.md";
  slug: "2023-02-05-on-the-way-home-from-jamstackconf-2022";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2023-09-21-we-need-to-talk-about-webops-so-we-can-stop-talking-about-webops.md": {
	id: "2023-09-21-we-need-to-talk-about-webops-so-we-can-stop-talking-about-webops.md";
  slug: "2023-09-21-we-need-to-talk-about-webops-so-we-can-stop-talking-about-webops";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024-01-08-2023-from-the-rearview-mirror.md": {
	id: "2024-01-08-2023-from-the-rearview-mirror.md";
  slug: "2024-01-08-2023-from-the-rearview-mirror";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024-01-18-first-rule-of-open-source-contributions-dont-contribute.md": {
	id: "2024-01-18-first-rule-of-open-source-contributions-dont-contribute.md";
  slug: "2024-01-18-first-rule-of-open-source-contributions-dont-contribute";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024-03-19-testing-for-us-and-not-us.md": {
	id: "2024-03-19-testing-for-us-and-not-us.md";
  slug: "2024-03-19-testing-for-us-and-not-us";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024-04-07-a-new-developer-biome-get-it.md": {
	id: "2024-04-07-a-new-developer-biome-get-it.md";
  slug: "2024-04-07-a-new-developer-biome-get-it";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024-04-17-in-the-defense-of-um.md": {
	id: "2024-04-17-in-the-defense-of-um.md";
  slug: "2024-04-17-in-the-defense-of-um";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024-04-20-test.md": {
	id: "2024-04-20-test.md";
  slug: "2024-04-20-test";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024-04-21-copy-work.md": {
	id: "2024-04-21-copy-work.md";
  slug: "2024-04-21-copy-work";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024-04-29-astros-great-but-what-about-11ty.md": {
	id: "2024-04-29-astros-great-but-what-about-11ty.md";
  slug: "2024-04-29-astros-great-but-what-about-11ty";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024-04-29-fedc-recap.md": {
	id: "2024-04-29-fedc-recap.md";
  slug: "2024-04-29-fedc-recap";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024-04-29-the-medium-doesnt-change-the-principle.md": {
	id: "2024-04-29-the-medium-doesnt-change-the-principle.md";
  slug: "2024-04-29-the-medium-doesnt-change-the-principle";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024-06-06-an-argument-against-capabilities-focused-engineering.md": {
	id: "2024-06-06-an-argument-against-capabilities-focused-engineering.md";
  slug: "2024-06-06-an-argument-against-capabilities-focused-engineering";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"By-the-46th-episode.md": {
	id: "By-the-46th-episode.md";
  slug: "by-the-46th-episode";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"Curation.md": {
	id: "Curation.md";
  slug: "curation";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"DRAFT---Sludge.md": {
	id: "DRAFT---Sludge.md";
  slug: "draft---sludge";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"Giving-grace.md": {
	id: "Giving-grace.md";
  slug: "giving-grace";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"Learn-your-tools.md": {
	id: "Learn-your-tools.md";
  slug: "learn-your-tools";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"Leet-Heat-Travelogue.md": {
	id: "Leet-Heat-Travelogue.md";
  slug: "leet-heat-travelogue";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"Lets-build-websites-again.md": {
	id: "Lets-build-websites-again.md";
  slug: "lets-build-websites-again";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"Tell-a-story-youre-a-part-of.md": {
	id: "Tell-a-story-youre-a-part-of.md";
  slug: "tell-a-story-youre-a-part-of";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"Theres-no-20-in-file-system-naming.md": {
	id: "Theres-no-20-in-file-system-naming.md";
  slug: "theres-no-20-in-file-system-naming";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"VueConfUS-2025-Recap.md": {
	id: "VueConfUS-2025-Recap.md";
  slug: "vueconfus-2025-recap";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"What-environments-social-media-can-create.md": {
	id: "What-environments-social-media-can-create.md";
  slug: "what-environments-social-media-can-create";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"apply-to-jobs-with-feeling.md": {
	id: "apply-to-jobs-with-feeling.md";
  slug: "apply-to-jobs-with-feeling";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"leveraging-copilot-for-git-commits.md": {
	id: "leveraging-copilot-for-git-commits.md";
  slug: "leveraging-copilot-for-git-commits";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
