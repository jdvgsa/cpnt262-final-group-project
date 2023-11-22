import { galleryData } from '$lib/data.js';
console.log(galleryData);
export function load({ params }) {
	const card = galleryData.find((card) => card.slug === params.slug);

	return {
		card 
	};
}