import axios from "axios";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
	url: BASE_URL,
	params: {
		maxResults: "50",
	},
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

export const fetchFromApi = async (URL) => {
	
	const {data} = await axios.get(`${BASE_URL}/${URL}`, options);
	// console.log({data});
	return data;
};
