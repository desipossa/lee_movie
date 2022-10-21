import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import DATA from "./data";
console.log(DATA)


// const movieDATA = createAsyncThunk(
//     '외부데이터받아어기01',
//     async (movie) => {
//         // console.log('store.js thunk', movie)
//         const res = await axios.get(movie);
//         console.log('store.js thunk', res);
//         return res.data.data.movies
//     }
// )




const movieDATA = createAsyncThunk(
    '외부데이터받아오기01',
    async (movie) => {
        const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?genre=${movie.genre}&limit=${movie.limit}`)
        return res.data.data.movies
    }
)

export { movieDATA }

// const movieDATA2 = createAsyncThunk(
//     '외부데이터받아어기02',
//     async (movie) => {
//         const res = await axios.get(movie);
//         return res.data.data.movies
//     }
// )

// export { movieDATA2 }

// 원본
// const movieDATASlice = createSlice({
//     name: '무비데이터',
//     initialState: [],
//     reducers: {},
//     extraReducers: {
//         [movieDATA.fulfilled]: (state, action) => state = action.payload
//     }
// })
const movieDATASlice = createSlice({
    name: '무비데이터',
    initialState: [],
    reducers: {},
    extraReducers: {
        [movieDATA.fulfilled]: (state, action) => state = action.payload
    }
})
// const movieDATASlice2 = createSlice({
//     name: '무비데이터',
//     initialState: [],
//     reducers: {},
//     extraReducers: {
//         [movieDATA.fulfilled]: (state, action) => state = action.payload
//     }
// })

const dataSlice = createSlice({
    name: '데이터함께쓰기',
    initialState: DATA,
    reducers: {
        update: (state, action) => state = state.concat(action.payload)
    }
})

const store = configureStore({
    reducer: {
        dataSlice: dataSlice.reducer,
        movieDATASlice: movieDATASlice.reducer,
        // movieDATASlice2: movieDATASlice2.reducer
    }
});

export const { update } = dataSlice.actions
export default store;