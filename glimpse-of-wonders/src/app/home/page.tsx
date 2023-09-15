import './styles.css';
import { Card } from '../components/card';

export default function Home() {
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
					<Card />
				</div>
			</section>
		</main>
	);
}
