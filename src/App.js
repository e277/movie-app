import { useEffect } from 'react';
import './App.css';

// 2aec1b91 - api key
const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=2aec1b91`

const App = () => {

    const serchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        console.log(data.Search)
    }

    useEffect(() => {
        serchMovies('Spiderman')
    }, [])


    return (
        <div className="App">
            App
        </div>
    );
}

export default App;
