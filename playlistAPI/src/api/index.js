import config from './config'

//the URL has a `` quotation for strings, to put variables inside
const apiKey = config.apiKey
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${ apiKey }&format=json`

export default function getArtists(country){
	//fetch is the same as XMLhttprequest
	//https://developers.google.com/web/updates/2015/03/introduction-to-fetch
	//it works with promises and get an object

	/* after the first .then get the json you need to check the json object structure to create what data you will pass to the component. In this case the topartists is the top of the object followed by the artist which has the array of artists.

	*/

	//we added to the URL variable a string ":country" so with the new url constan we remplace the country string with the variable which we get from the selected in the App.vue 
	const url = URL.replace(':country', country)
	return fetch(url)
		.then(res => res.json())
		.then(json => json.topartists.artist)
}