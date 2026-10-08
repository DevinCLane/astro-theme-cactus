import { type CollectionEntry, getCollection } from "astro:content";

/** filter out draft works based on the environment */
export async function getAllWorks(): Promise<CollectionEntry<"work">[]> {
	return await getCollection("work", ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
}