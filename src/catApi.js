import axios from 'axios'

export function fetchRandomCat(imageFunction,execute) {
	return axios.get('https://aws.random.cat/meow').then(response=>{
		return response.data
	})
}