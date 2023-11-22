import { galleryData } from '$lib/data.js';
import {error} from "@sveltejs/kit"
console.log(galleryData);
export function load({ params }) {
	const card = galleryData.find((card) => card.slug === params.slug);

  if (!card) throw error(404);

	return {
		card 
	};
}