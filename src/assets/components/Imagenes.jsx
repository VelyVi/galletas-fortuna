import { useState } from 'react';
import randomIndex from '../helpers/randomIndex';
import { bg1, bg2, bg3, bg4 } from '../images/';

const images = [bg1, bg2, bg3, bg4];

function Imagenes() {
	const [img, setImg] = useState(images[randomIndex(images.length)]);

	return <img src={img.url} alt={img.fondo} />;
}

export default Imagenes;
