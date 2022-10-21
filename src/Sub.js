import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { movieDATA } from './store';


const Sub = ({ genre, limit }) => {
    const [movie, setMovie] = useState([]);

    const getmovie = async () => {
        const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${limit}&genre=${genre}`);
        setMovie(res.data.data.movies)
    }

    useEffect(() => {
        getmovie();
    }, [])
    return (
        <div>
            <div>{
                movie.map(it => <li>{it.id}</li>)
            }
            </div>
        </div>
    )
}

export default Sub