'use client';

import { useState } from 'react';
import Image from "next/image";
import "./styles.css";

interface IType {
  type: 'mouseover' | 'mouseout'
}

export default function Card() {

  const [breedView, setBreedView] = useState(Boolean);

  const changeView = (event: IType) => {
		if (event.type === 'mouseover') {
      setBreedView(true)
    } else if (event.type === 'mouseout'){
      setBreedView(false);
    }
	};

	return (
		<div
			className='card'
			onMouseOver={(event: any) => changeView(event)}
			onMouseOut={(event: any) => changeView(event)}
		>
			<figure className='card-image-container'>
				<Image
					src='https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=2000'
					alt='Dog pic'
					fill
					className='image'
				/>
				<div className={`breed-container ${breedView && "active-breed"}`}>
					<ul>
						<li>No 1</li>
						<li>No 2</li>
					</ul>
				</div>
			</figure>
			<span className='card-title'>Dog name</span>
		</div>
	);
}
