const API_KEY = "fef2964777b307936c227773febfcbe5";
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWYyOTY0Nzc3YjMwNzkzNmMyMjc3NzNmZWJmY2JlNSIsIm5iZiI6MTc0ODI4Mzk3NS4yNjEsInN1YiI6IjY4MzRiMjQ3YjQ1N2NmNWRkMTA1NTc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W5Mvk0G-RikFpe2BeQMblJezlvbFZXhQbcfMZbBIvII'
  }
};

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?language=en-US&page=1`, options)
    const data = await response.json()
    console.log(data)
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
};