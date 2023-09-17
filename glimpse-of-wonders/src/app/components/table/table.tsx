'use client'
import { IBreeds } from '@/app/table/page';
import { FC } from 'react';
import Columns from './columns';

interface TableProps {
	breeds: IBreeds[];
	onEditClick: (indexBreed: number) => void;
	onDelete: (index: number) => void;
}

const Table: FC<TableProps> = ({ breeds, onEditClick, onDelete }) => {
	return (
		<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-6'>
			<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
				<tr>
					<th scope='col' className='px-6 py-3'>
						Name
					</th>
					<th scope='col' className='px-6 py-3'>
						Sub-Breeds
					</th>
					<th scope='col' className='px-6 py-3' />
					<th scope='col' className='px-6 py-3' />
				</tr>
			</thead>
			<tbody>
				{breeds.length > 0 &&
					breeds.map((breed, key) => (
						<Columns
							index={key}
							key={breed.name}
							name={breed.name}
							subBreeds={breed.subBreeds}
							onEditClick={(indexBreed) => onEditClick(indexBreed)}
							onDelete={(index) => onDelete(index)}
						/>
					))}
			</tbody>
		</table>
	);
};

export default Table;
