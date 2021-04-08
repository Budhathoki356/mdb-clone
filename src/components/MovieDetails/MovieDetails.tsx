import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import url from '../../config/api.json'
import { useParams } from 'react-router-dom'
import { Movie } from '../../types'
import { Link } from 'react-router-dom'

const MovieDetails: React.FunctionComponent = () => {

    const [movie, setMovies] = useState<Movie>({ id: '', title: '', medium_cover_image: '', year: '', genres: [], rating: 0, summary: '', description_full: '', like_count: 0 })
    const [suggestions, setSuggestion] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const { id } = useParams<any>()

    useEffect(() => {
        Axios.get(url.movie_details + id)
            .then((data) => {
                setMovies(data.data.data.movie)
                setLoading(true)
            }
            )

        Axios.get(url.movie_suggestion + id)
            .then((data) => {
                const res = data.data.data.movies.slice(0, 3)
                console.log(res)
                setSuggestion(res)
            })
    }, [id])

    return (
        <>
            {
                !loading ? <p>loading...</p> :
                    <div className="movie-detail row" >
                        <div className="movie-detail__inner d-flex">
                            <img src={movie.medium_cover_image} alt="" />
                            <div className="movie-content">
                                <div className="movie-heading d-flex justify-content-between">
                                    <h2>{movie.title}</h2>
                                    <span>Released: {movie.year}</span>
                                </div>
                                <div className="movie-content__inner">
                                    <p className="movie-description"> {movie.description_full}</p>
                                    <div className="content-more">
                                        <span><i className="pr-1 far fa-star"></i> {movie.rating}</span>
                                        <span><i className="pr-1 far fa-thumbs-up"></i> {movie.like_count}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="movie-suggestion row">
                            <h2>Suggestion</h2>
                            <div className="movie-suggestion__inner">
                                {
                                    suggestions.map((item) => (
                                        <div className="d-flex justify-content-between" key={item.id}>
                                            <Link to={`/movie-detail/${item.id}`}>
                                                <div className="card mr-5 mt-4" style={{ width: '18rem' }}>
                                                    <img src={item.medium_cover_image} alt={`${item.title} logo`} />
                                                    <div className="overlay d-flex align-items-center justify-content-center">
                                                        <h1 className="details" style={{ color: '#fff' }}>details</h1>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between p-2">
                                                        <p className="movie-title">{item.title} | {item.year}</p>
                                                        <p className="rating"><i className="pr-1 far fa-star"></i>{item.rating}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div >
            }
        </>
    )
}

export default MovieDetails
