import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { movieDATA } from './store';


const Sub = ({ genre }) => {
    const { dataSlice, movieDATASlice } = useSelector(it => it);
    const dispatch = useDispatch();
    useEffect(() => {
        const limit = 10;
        dispatch(movieDATA({ genre: genre }))
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