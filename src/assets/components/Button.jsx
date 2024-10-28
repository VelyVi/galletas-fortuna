import { useState } from 'react';
import phrases from '../../phrases.json';
import randomIndex from '../helpers/randomIndex';
import { bg1, bg2, bg3, bg4 } from '../images/';

const images = [bg1, bg2, bg3, bg4];

function changePhrase() {
	const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)]);
	const [img, setImg] = useState(images[randomIndex(images.length)]);

	setPhrase(phrases[randomIndex(phrases.length)]);
	setImg(images[randomIndex(images.length)]);

	return (
		<div>
			<button onClick={changePhrase}>Ver otro</button>
		</div>
	);
}

export default changePhrase;
