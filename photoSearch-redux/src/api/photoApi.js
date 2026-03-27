import axios from "axios";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY

export async function fetchPhotos(query) {

    try {
        
        const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${ACCESS_KEY}`)
        return res.data.results
    } catch (error) {
        console.log("Error Fetching...", error);
        
        
    }
    
}