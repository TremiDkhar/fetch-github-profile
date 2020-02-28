import { state } from '../state';
import "./index.css";

export function init() {
	const reposButton = document.querySelector( `#repo-info` );
	reposButton.addEventListener( `click`, renderLightBox );
}

function renderLightBox( e ) {

	e.preventDefault();

	const repos = state.reposInfo;
	let reposMarkup = ``;

	repos.map( repo => {
		reposMarkup += `<a href="${repo.html_url}" target="_blank">${repo.name}</a>` 
	} );

	let markup = ``;
	markup = `<div id="overlay">
		<div id="lightbox">
			<h2>GitHub Public Repository of ${state.userInfo.name}</h2>
			${reposMarkup}
			<button id="close" href="#">X</button>
		</div>
	</div>
	`;

	document.querySelector( `#app` ).insertAdjacentHTML( `beforeend`, markup );
	const closeBtn = document.querySelector( `#close` );
	const overlay = document.querySelector( `#overlay` );

	closeBtn.addEventListener( `click`, close );
	overlay.addEventListener( `click`, handleCloseBtn );
	document.addEventListener( `keyup`, handleKey );
}

function handleCloseBtn( e ) {
	if ( e.target.id == 'overlay' ) {
		close();
	}
}

function close( e ) {
	const overlay = document.querySelector( `#overlay` );
	overlay.remove();
}

function handleKey( e ) {
	if ( e.key === "Escape" ) {
		close();
	}
}