export interface DogBreeds {
	[breed: string]: string[];
}

export interface ITypeMouse {
	type: "mouseover" | "mouseout";
}

export interface ICardProps {
	breed: string;
	allBreeds: DogBreeds;
}