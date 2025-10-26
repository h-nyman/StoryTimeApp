const API_KEY = process.env.EXPO_PUBLIC_OMDB_API_KEY; 
const BASE_URL = `https://www.omdbapi.com/`;

export async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.Search || []; 
}
