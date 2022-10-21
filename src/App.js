import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { update } from './store';
import Sub from './Sub';


const App = () => {
    const { dataSlice } = useSelector(state => state);
    const dispatch = useDispatch();
    return (
        <div>
            <Sub genre="Action" limit={5} />
            <hr />
            <Sub genre="Animation" limit={2} />
            <hr />
            <Sub genre="Action" limit={10} />
            {
                dataSlice.map(it => {
                    return (
                        <li onClick={() => dispatch(update({ id: 0, title: it.title, dec: "또 없지롱..." }))}>{it.title}</li>
                    )
                })
            }
        </div>
    )
}

export default App