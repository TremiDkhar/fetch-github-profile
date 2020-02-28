const state = {
	username: null,
	userInfo: null,
	reposInfo: null,
}

const setState = ( toSet, newValue ) => {
	state[toSet] = newValue;
}

export { state, setState };