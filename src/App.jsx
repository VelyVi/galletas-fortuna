import { useState } from 'react';
import randomIndex from './assets/helpers/randomIndex';
import phrases from '../src/phrases.json';
import { bg1, bg2, bg3, bg4 } from './assets/images/';
import './App.css';

const images = [bg1, bg2, bg3, bg4];

function App() {
	const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)]);
	const [img, setImg] = useState(images[randomIndex(images.length)]);

	function changePhrase() {
		setPhrase(phrases[randomIndex(phrases.length)]);
		setImg(images[randomIndex(images.length)]);
	}

	return (
		<div className="wrapper" style={{ backgroundImage: `url('${img}')` }}>
			<div className="container">
				{/*Encabezado*/}
				<h1 className="heading">
					Galletas de la <br />
					Fortuna
				</h1>
				{/*Contenido*/}
				<div className="card">
					<div className="card__body">
						<q classnName="phrase">{phrase.phrase}</q>
						<b>
							<cite className="author">- {phrase.author}</cite>
						</b>
					</div>
				</div>
				{/*Button*/}
				<button className="btn" onClick={changePhrase}>
					Ver otro
				</button>
			</div>
		</div>
	);
}

export default App;
