import { IBreeds } from '@/app/table/page';
import { FC } from 'react';

interface IProps extends IBreeds {
	onEditClick: (indexBreed: number) => void;
	index: number;
	onDelete: (index: number) => void;
}

const Columns: FC<IProps> = ({ index, name, subBreeds, onEditClick, onDelete }) => {

	return (
		<tr className='bg-white border-b hover:bg-gray-50'>
			<td className={"px-6 py-4 font-medium text-black whitespace-nowrap"}>
				{name}
			</td>
			<td className={"px-6 py-4 text-black"}>
				<select name='subbreeds' id=''>
					<option>List</option>
					{subBreeds.map((breed) => (
						<option key={breed} value={breed}>
							{breed}
						</option>
					))}
				</select>
			</td>
			<td className={"px-6 py-4 text-right"}>
				<button
					type='button'
					className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
					onClick={() => onEditClick(index)}
				>
					Edit
				</button>
			</td>
			<td className={"px-6 py-4 text-right"}>
				<button
					type='button'
					className='font-medium text-red-600 dark:text-red-500 hover:underline'
					onClick={() => onDelete(index)}
				>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default Columns;
