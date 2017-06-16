import fetch from 'isomorphic-fetch';

export default{

	getNews: () => {
		return fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
			.then(function(response) {
				return response.json();
			})
	},

}
