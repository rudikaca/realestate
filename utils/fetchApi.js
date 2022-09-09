import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    // const response = await axios.get((url), options);
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '0d331c1b96msh319a0ffad52ab25p17f069jsna17885ef318a',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}
