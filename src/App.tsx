import Season from './components/Season'
import type { MovieProps } from './components/Movie';
import Movie from './components/Movie';

const sheetyUrl = import.meta.env.VITE_SHEETY_URL;


async function fetchMovieData() {
  try {;
    const response = await fetch(sheetyUrl);
    const json = await response.json();
    return json.sheet1;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

const movieData = await fetchMovieData();

console.log(movieData);


function App() {

  return (
    <>
      <Season season='🌻 Spring'>
        {movieData.filter((movie:MovieProps) => movie.season === 'Spring').map((movie:MovieProps) => <Movie
        person={movie.person}
        title={movie.title}
        date={movie.date}
        streamingService={movie.streamingService}
        genre={movie.genre}
        season={movie.season}
        posterUrl={movie.posterUrl}
        taylorReview={movie.taylorReview}
        joseReview={movie.joseReview}
        victorReview={movie.victorReview}/>)}
      </Season>
      <Season season='☀️ Summer'>
        {movieData.filter((movie:MovieProps) => movie.season === 'Summer').map((movie:MovieProps) => <Movie
        person={movie.person}
        title={movie.title}
        date={movie.date}
        streamingService={movie.streamingService}
        genre={movie.genre}
        season={movie.season}
        posterUrl={movie.posterUrl}
        taylorReview={movie.taylorReview}
        joseReview={movie.joseReview}
        victorReview={movie.victorReview}/>)}
      </Season>
      <Season season='🍂 Fall'>
        {movieData.filter((movie:MovieProps) => movie.season === 'Fall').map((movie:MovieProps) => <Movie
        person={movie.person}
        title={movie.title}
        date={movie.date}
        streamingService={movie.streamingService}
        genre={movie.genre}
        season={movie.season}
        posterUrl={movie.posterUrl}
        taylorReview={movie.taylorReview}
        joseReview={movie.joseReview}
        victorReview={movie.victorReview}/>)}
      </Season>
      <Season season='❄️ Winter'>
        {movieData.filter((movie:MovieProps) => movie.season === 'Winter').map((movie:MovieProps) => <Movie
        person={movie.person}
        title={movie.title}
        date={movie.date}
        streamingService={movie.streamingService}
        genre={movie.genre}
        season={movie.season}
        posterUrl={movie.posterUrl}
        taylorReview={movie.taylorReview}
        joseReview={movie.joseReview}
        victorReview={movie.victorReview}/>)}
      </Season>
    </>
  )
}

export default App
