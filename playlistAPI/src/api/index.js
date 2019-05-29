import config from './config'

//the URL has a `` quotation for strings, to put variables inside
const apiKey = config.apiKey
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=japan&api_key=${ apiKey }&format=json`

export default function getArtists(){
	//fetch is the same as XMLhttprequest
	//https://developers.google.com/web/updates/2015/03/introduction-to-fetch
	//it works with promises and get an object

	/* after the first .then get the json you need to check the json object structure to create what data you will pass to the component. In this case the topartists is the top of the object followed by the artist which has the array of artists.

	*/
	return fetch(URL)
		.then(res => res.json())
		.then(json => json.topartists.artist)
}