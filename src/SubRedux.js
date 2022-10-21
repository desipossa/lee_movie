import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { movieDATA } from './store';


const Sub = ({ genre, limit }) => {
    const { dataSlice, movieDATASlice } = useSelector(it => it);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieDATA({ genre: genre, limit: limit }))
    }, [])
    return (
        <div>
            <div>
                {
                    movieDATASlice.map(it => <li>{it.id}</li>)
                }
            </div>
        </div>
    )
}

export default Sub