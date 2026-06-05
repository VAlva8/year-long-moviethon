import Season from './components/Season'
import type { MovieProps } from './components/Movie';
import Movie from './components/Movie';
import Header from './components/Header';
import Page from './components/Page';

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

function App() {

  return (
    <>
      <Header data={movieData}/>
      <Page>
        <Season season='🌻 Spring' color='#5DBB8A'>
          {movieData.filter((movie:MovieProps) => movie.season === 'Spring').map((movie:MovieProps) => <Movie {...movie} key={`spring-movie-${movie.date}`}/>)}
        </Season>
        <Season season='☀️ Summer' color='#F5C842'>
          {movieData.filter((movie:MovieProps) => movie.season === 'Summer').map((movie:MovieProps) => <Movie {...movie} key={`summer-movie-${movie.date}`}/>)}
        </Season>
        <Season season='🍂 Fall' color='#E8824A'>
          {movieData.filter((movie:MovieProps) => movie.season === 'Fall').map((movie:MovieProps) => <Movie {...movie} key={`fall-movie-${movie.date}`}/>)}
        </Season>
        <Season season='❄️ Winter' color='#A8D8F0'>
          {movieData.filter((movie:MovieProps) => movie.season === 'Winter').map((movie:MovieProps) => <Movie {...movie} key={`winter-movie-${movie.date}`}/>)}
        </Season>
      </Page>
    </>
  )
}

export default App
