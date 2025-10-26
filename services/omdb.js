const API_KEY = "238dba63"; 
const BASE_URL = `https://www.omdbapi.com/`;

export async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.Search || []; 
}
