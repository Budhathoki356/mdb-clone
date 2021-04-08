import React from 'react'
import { Link } from 'react-router-dom';
import { Movie } from '../../types/index';

interface IContentProps {
    content: Movie
}

const MovieList: React.FC<IContentProps> = ({ content }) => {

    const { id, title, year, rating, medium_cover_image } = content

    return (
        <Link to={`/movie-detail/${id}`}>
            <div className="card ml-1 mr-1" style={{ width: '18rem' }}>
                <img src={medium_cover_image} alt={`${title} logo`} />
                <div className="overlay d-flex align-items-center justify-content-center">
                    {/* <Link to="/" className="details">Details</Link> */}
                    <h1 className="details" style={{ color: '#fff' }}>details</h1>
                </div>
                <div className="d-flex align-items-center justify-content-between p-2">
                    <p className="movie-title">{title} | {year}</p>
                    <p className="rating"><i className="pr-1 far fa-star"></i> {rating}</p>
                </div>
            </div>
        </Link>
    )
}

export default MovieList
