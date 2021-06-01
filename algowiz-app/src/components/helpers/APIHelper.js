/**
 * Makes an Async fetch request to the API, must provide a path for the fetch
 * ie: Do not supply path = 'http://localhost:8080/algowiz/quiz/quizID'
 * instead use : path = 'quiz/quizID' 
 * Expects to receive and return json data, may misbehave if other data returned
 * use promise syntax in conjunction with this method. Use catch to handle errors
 * Example usage: 
 * APIHelper('quiz/quizID')
 * .then(result => {
 * 		// code for result
 * })
 * .catch(err => {
 * 		// code for error handling
 * })
 * @param {string} path, path to fetch from API
 * @param {string} method, optional, defaults to GET, (POST... etc)
 */
function APIHelper(path, method = 'GET') {
	// check .env for which host to use (local vs production)
	// TODO: Sanitize path input?
	const url = `${process.env.REACT_APP_API_URL}/${path}`;
	// return a promise
	return fetch(url, {
		credentials:'include',
		method,
		headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	})
	.then(response => {
		// only pass along data if the fetch was successful
		if (response.ok) {
			return response.json();
		} else {
			// return response as error
			return Promise.reject(response);
		}
	})
	// return either the result or an error
	.then(result => {
		// pass along the json result
		return result;
	}, (error) => {
		// Pass along the error
		return Promise.reject(error);
	});
}

export default APIHelper;
