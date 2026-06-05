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

const springMovies = movieData.filter((movie:MovieProps) => movie.season === 'Spring');
const summerMovies = movieData.filter((movie:MovieProps) => movie.season === 'Summer');
const fallMovies = movieData.filter((movie:MovieProps) => movie.season === 'Fall');
const winterMovies = movieData.filter((movie:MovieProps) => movie.season === 'Winter');

function calculateToggle(season:string){
  const today = new Date();

  const spring = new Date( springMovies[springMovies.length - 1].date );
  spring.setDate(spring.getDate() + 2)
  
  const summer = new Date( summerMovies[summerMovies.length - 1].date )
  summer.setDate(summer.getDate() + 2)

  const fall = new Date( fallMovies[fallMovies.length - 1].date );
  fall.setDate(fall.getDate() + 2)
  
  const winter = new Date( winterMovies[winterMovies.length - 1].date );
  winter.setDate(winter.getDate() + 2)

  if(season === 'Spring' && today <= spring){
    return true
  }else if(season === 'Summer' && today <= summer && today > spring){
    return true
  }else if(season === 'Fall' && today <= fall && today > summer){
    return true
  }else if(season === 'Winter' && today <= winter && today > fall){
    return true
  }

  return false
}

function App() {

  return (
    <>
      <Header data={movieData}/>
      <Page>
        <Season season='🌻 Spring' color='#5DBB8A' initialToggle={calculateToggle('Spring')}>
          {springMovies.map((movie:MovieProps) => <Movie {...movie} key={`spring-movie-${movie.date}`}/>)}
        </Season>
        <Season season='☀️ Summer' color='#F5C842' initialToggle={calculateToggle('Summer')}>
          {summerMovies.map((movie:MovieProps) => <Movie {...movie} key={`summer-movie-${movie.date}`}/>)}
        </Season>
        <Season season='🍂 Fall' color='#E8824A' initialToggle={calculateToggle('Fall')}>
          {fallMovies.map((movie:MovieProps) => <Movie {...movie} key={`fall-movie-${movie.date}`}/>)}
        </Season>
        <Season season='❄️ Winter' color='#A8D8F0' initialToggle={calculateToggle('Winter')}>
          {winterMovies.map((movie:MovieProps) => <Movie {...movie} key={`winter-movie-${movie.date}`}/>)}
        </Season>
      </Page>
    </>
  )
}

export default App
