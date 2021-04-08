import React, { useState, useEffect } from 'react'
import { Movie } from '../../types/index';
import MovieList from './MovieList';


interface IMovieProps {
    url: string;
}

const MovieListRender: React.FC<IMovieProps> = ({ url }) => {

    const [movies, setMovies] = useState<Movie[]>([])
    const [err, setErr] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)

    const getMoviesRequest = async (url: string) => {
        try {
            setLoading(true)
            const response = await fetch(`${url}`)
            const resJson = await response.json()
            setMovies(resJson.data.movies)
            setLoading(false)
        } catch (e) {
            setErr(e.message)
        }
    }

    useEffect(() => {
        getMoviesRequest(url)
        // setLoading(false)
    }, [])

    if (err) return <p>Unable to fetch movies.</p>

    if(loading) return <p>Loading...</p>

    if (!movies?.length) return <p>No movies available.</p>

    return (
        <>
            { 
                movies.map(movie => (
                    <div className="image-container d-flex justify-content-start m-1" key={movie.id}>
                        <MovieList content={movie} />
                    </div>
                )) 
            }

        </>
    )
}

export default MovieListRender
