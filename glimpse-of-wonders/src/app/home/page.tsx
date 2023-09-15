'use client';

import './styles.css';
import { Card } from '../components/card';
import { useEffect, useState } from 'react';
import { getAllBreeds } from '../services';
import { DogBreeds } from '../models/dog';

export default function Home() {

	const [breeds, setBreeds] = useState<string[]>([]);
	const [allBreeds, setAllBreeds] = useState<DogBreeds>({});

	const getAllBreed = async () => {
		const objBreeds: DogBreeds = await getAllBreeds();
		const allBreedsSave: DogBreeds = objBreeds;
		const allBreeds: string[] = Object.keys(objBreeds);

		setAllBreeds(allBreedsSave);
		setBreeds(allBreeds);
	}

	useEffect(() => {
		getAllBreed();
	}, []);

	return (
		<main>
			<section className='title-section'>
				<h1>Minnek</h1>
			</section>

			<section>
				<div className='subtitle-container'>
					<h2>Dog List</h2>
				</div>
				<div className='card-container'>
					{
						breeds.length > 0 && breeds.map(breed => <Card key={breed} breed={breed} allBreeds={allBreeds} />)
					}
				</div>
			</section>
		</main>
	);
}
