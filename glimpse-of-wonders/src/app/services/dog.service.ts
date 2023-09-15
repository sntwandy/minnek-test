
export async function getBreedsImg(breed: string) {
	const API_IMG = `https://dog.ceo/api/breed/${breed}/images/random`;
	try {
		const data = await fetch(API_IMG);
		const imgData = await data.json();
		return imgData.message;
	} catch (error) {
		console.error('Error fetching image:', error);
	}
}

export async function getAllBreeds() {
  const API_ALL_BREED = 'https://dog.ceo/api/breeds/list/all';
	try {
		const data = await fetch(API_ALL_BREED);
		const objBreeds = await data.json();
		return objBreeds.message;
	} catch (error) {
		console.error('Error fetching breeds:', error);
	}
}
