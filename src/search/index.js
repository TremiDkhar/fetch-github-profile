import { state, setState } from "../state";
import { init as initGitHub, clearProfile } from "../github";

import './index.css';

export default function search() {
	return `
	  <form name="search" id="search">
	    <p id="search-label"><label for="search-field">Enter GitHub Username Below</label></p>
	    <input id="search-field" required name="search" type="search" placeholder="GitHub Username" />
	    <input type="submit" id="submit" value="Search" />
	  </form>
	`;
}

export function init() {
	const search = document.querySelector( `#search` );
	search.addEventListener( `submit`, doSearch );
}

async function doSearch( e ) {

	e.preventDefault();
	clearProfile();
	const username = document.querySelector( `#search-field` ).value.toLowerCase();
	setState( `username`, username );
	initGitHub();

}
