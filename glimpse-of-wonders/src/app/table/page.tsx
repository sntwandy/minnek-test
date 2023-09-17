'use client';

import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Search, Table } from '../components';

export interface IBreeds {
	name: string;
	subBreeds: string[]
}

const TablePage = () => {
	const [breeds, setBreeds] = useState<IBreeds[]>([]);
	const [search, setSearch] = useState<string | undefined>();
	const [breedEdit, setBreedEdit] = useState<IBreeds | null>(null); // Cambio: breedEdit es null al principio
	const [breedEditIndex, setBreedEditIndex] = useState<number>(0);
	const [filterBreeds, setFilterBreeds] = useState<IBreeds[]>([]);
	const [breedNew, setBreedNew] = useState<IBreeds>({
		name: '',
		subBreeds: []
	});

	const onBreedCreate = () => {
		setBreeds([
			...breeds,
			breedNew
		])
		setBreedNew({
			name: '',
			subBreeds: []
		})
	}

	const onBreedEdit = (event: ChangeEvent<HTMLInputElement>) => {
		if (breedEdit) {
			const updatedBreedEdit = { ...breedEdit, name: event.target.value };
			setBreedEdit(updatedBreedEdit);
		}
	};

	const onSaveEdit = useCallback(() => {
		if (breedEdit) {
			const updatedBreeds = [...breeds];
			updatedBreeds[breedEditIndex] = breedEdit;
			setBreeds(updatedBreeds);
			setBreedEdit(null);
		}
	},[breedEdit, breedEditIndex, breeds]);

	const onEditClick = (breedIndex: number) => {
		setBreedEditIndex(breedIndex);
		setBreedEdit(breeds[breedIndex]);
	};

	const onDelete = (index: number) => {
		const breedsCopy = breeds;
		breedsCopy.splice(index, 1);
		setBreeds(breedsCopy);
	}

	useEffect(() => {
		if (search?.length) {
			const breedsCopy = [...breeds];
			const filteredBreeds = breedsCopy.filter((breed) => {
				const nameMatch = breed.name
					.toLowerCase()
					.includes(search.toLowerCase());
				const subBreedsMatch = breed.subBreeds.some((subBreed) =>
					subBreed.toLowerCase().includes(search.toLowerCase())
				);
				return nameMatch || subBreedsMatch;
			});
			setFilterBreeds(filteredBreeds);
		}
	}, [breeds, search]);

  return (
		<div className='max-w-2xl mx-auto'>
			<div className='flex items-center justify-between flex-col mt-8'>
				<span className='text-xl mb-2 font-semibold'>Create box</span>
				<label>Breed name</label>
				<input
					type='text'
					onChange={(event) =>
						setBreedNew({
							name: event.target.value,
							subBreeds: breedNew?.subBreeds,
						})
					}
					className='mr-4 w-full rounded border p-2 focus:border-blue-500 focus:outline-none max-w-md	'
					value={breedNew?.name}
				/>
				{/* <label>Sub breed</label>
				<input
					type='text'
					onChange={(event) => onBreedEdit(event)}
					className='mr-4 w-full rounded border p-2 focus:border-blue-500 focus:outline-none max-w-md	'
					value={""}
				/> */}
				<div className='flex items-center justify-center space-x-2 mt-4 mb-4'>
					<button
						onClick={() => onBreedCreate()}
						type='button'
						className='btn rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600'
					>
						Create
					</button>
				</div>
			</div>
			<div className='flex items-center justify-between flex-col'>
				<span className='text-xl mb-2 font-semibold'>Edit box</span>
				<input
					type='text'
					onChange={(event) => onBreedEdit(event)}
					className='mr-4 w-full rounded border p-2 focus:border-blue-500 focus:outline-none max-w-md	'
					value={breedEdit?.name ? breedEdit.name : ""}
				/>
				<div className='flex items-center justify-center space-x-2 mt-4 mb-4'>
					<button
						onClick={() => onSaveEdit()}
						type='button'
						className='btn rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600'
					>
						Update
					</button>
				</div>
			</div>
			<Search setSearch={setSearch} />
			<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
				<Table
					breeds={search?.length ? filterBreeds : breeds}
					onEditClick={onEditClick}
					onDelete={onDelete}
				/>
			</div>
		</div>
	);
};

export default TablePage;
