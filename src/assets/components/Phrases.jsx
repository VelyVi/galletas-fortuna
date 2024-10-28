import { useState } from 'react';
import phrases from '../../phrases.json';
import randomIndex from '../helpers/randomIndex';

function Phrases() {
	const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)]);

	return (
		<div>
			<div>
				<q>{phrase.phrase}</q>
			</div>
		</div>
	);
}

export default Phrases;
