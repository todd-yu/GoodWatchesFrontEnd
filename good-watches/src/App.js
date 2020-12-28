import logo from './logo.svg';
import './App.css';
import Movie from './movie-component/movie.js'
import todd from './constants.js'

function App() {
  return (      
      <header>
        <h1>
          buttcheeks
        </h1>
        <Movie movieName='todd' movieID='123456' imageLink={todd} description='tall asian man'/>
      </header>
  );
}

export default App;
