import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg'

// 2aec1b91 - api key
const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=2aec1b91`

// Static data example
// const movie1 = {
//     "Title": "Supernatural",
//     "Year": "2005–2020",
//     "imdbID": "tt0460681",
//     "Type": "series",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNzRmZWJhNjUtY2ZkYy00N2MyLWJmNTktOTAwY2VkODVmOGY3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
// }

const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('Supernatural')
    }, [])


    return (
        <div className="app">
            <h1>Ezra's Movie List</h1>
            <div className="search">
                <input
                    type="text"
                    placeholder='Search For Movies'
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { searchMovies(searchTerm) }}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>

                ) : (
                    <div className="empty">
                        <h2>No Movies found!!!</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;
