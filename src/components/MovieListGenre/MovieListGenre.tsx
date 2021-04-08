import React, { useState, useEffect } from 'react'
import { Movie } from '../../types/index'
import MovieList from '../MovieList/MovieList'



interface IProps {
    url: string
}

const MovieListGenre: React.FC<IProps> = ({url}) => {

    const [movie, setMovie] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const getMovieWithGenre = async (url: string) => {
        const response = await fetch(`${url}?genre=comedy`)
        const resJson = await response.json()
        setMovie(resJson.data.movies)
        setLoading(false)
    }

    useEffect(() => {
        getMovieWithGenre(url)
    }, [url])

    if(loading) return <p>Loading...</p>

    return (
        <>
            { 
                movie.map(mov => (
                    <div className="image-container d-flex justify-content-start m-1" key={mov.id}>
                       <MovieList content={mov} />
                    </div>
                ))
            }
        </>
    )
}

export default MovieListGenre
