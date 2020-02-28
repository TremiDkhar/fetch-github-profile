import 'normalize.css';
import search, { init as initSearch} from "./search"
import { doHeader as header } from './header.js';


function init() {
	const app = document.querySelector( `#app` );

	app.innerHTML = header();
	app.insertAdjacentHTML( `beforeend`, search() );
	initSearch();

}

init();
