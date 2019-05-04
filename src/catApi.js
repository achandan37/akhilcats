import axios from 'axios'

export function fetchRandomCat(imageFunction,execute) {
	return axios.get('http://aws.random.cat/meow').then(response=>{
		return response.data
	})
}