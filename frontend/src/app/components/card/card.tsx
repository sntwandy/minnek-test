'use client';

import { FC, useEffect, useState } from 'react';
import Image from "next/image";
import "./styles.css";
import { getBreedsImg } from '../../services';
import { ICardProps, ITypeMouse, } from '@/app/models/dog';

const Card: FC<ICardProps> = ({ breed, allBreeds }) => {

  const [breedView, setBreedView] = useState<boolean>(false);
	const [breedImg, setBreedImg] = useState<string>('');

  const changeView = (event: ITypeMouse) => {
		if (event.type === 'mouseover') {
      setBreedView(true)
    } else if (event.type === 'mouseout'){
      setBreedView(false);
    }
	};

	const getImg = async (breed: string) => {
		const img = await getBreedsImg(breed);
		setBreedImg(img);
	}

	useEffect(() => {
		breed && allBreeds && getImg(breed);
	}, [breed, allBreeds]);

	return (
		<div
			className='card'
			onMouseOver={(event: any) => changeView(event)}
			onMouseOut={(event: any) => changeView(event)}
		>
			<figure className='card-image-container'>
				{breedImg && (
					<Image src={breedImg} alt='Dog pic' fill className='image' />
				)
				}
				<div className={`breed-container ${breedView && "active-breed"}`}>
					<ul>
						{allBreeds &&
							allBreeds[breed].map(breed => <li key={breed}>{breed}</li>)}
					</ul>
				</div>
			</figure>
			<span className='card-title'>{breed}</span>
		</div>
	);
}

export default Card;