`use strict`;

import { state, setState } from '../state';
import { init as initLightBox } from '../lightbox';
import './index.css';

export async function init() {
	const userInfo = await fetch( `https://api.github.com/users/${state.username}` )
		.then( response => response.json() )
		.catch( error => console.log( `There is an error: ` + error ) );

	const reposInfo = await fetch( `https://api.github.com/users/${state.username}/repos` )
		.then( response => response.json() )
		.catch( error => console.log( `There is an error: ` + error ) );

	setState( `userInfo`, userInfo );
	setState( `reposInfo`, reposInfo );

	renderProfile();

}

function renderProfile( userInfo, reposInfo ) {

	const apps = document.querySelector( `#app` );
	let markup = '';
	const name = ( state.userInfo.name !== null ) ? `<h2>${state.userInfo.name}</h2>` : '';
	const bio = ( state.userInfo.bio !== null ) ? `<div>${state.userInfo.bio}</div>` : '';
	markup = `<div id="profile">
		<img src="${state.userInfo.html_url}.png?size=140" id="profile-pic" />
		${name}
		${bio}
		<div>Joined GitHub On: ${new Date(state.userInfo.created_at).toDateString()}</div>
		<div id="stat">
			<span>Public Repoitory: ${state.userInfo.public_repos}</span>
			<span>Public Gists: ${state.userInfo.public_gists}</span>
			<span>Follower: ${state.userInfo.followers}</span>
			<span>Following: ${state.userInfo.following}</span>
		</div>
		<div id="view-more">
			<a href="${state.userInfo.html_url}" target="_blank">Visit Profile In GitHub</a>
			<a href="#" id="repo-info">View Public Repository</a>
		</div>
	</div>`

	apps.insertAdjacentHTML( `beforeend`, markup );
	initLightBox();

}

export function clearProfile() {
	const profile = document.querySelector( `#profile` );
	if ( profile ) profile.remove();
}