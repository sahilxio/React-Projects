import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    query: "",
    loading: false,
    error: false,
    results: []
}

const photoSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {

        setQuery: (state, action) => {
            state.query = action.payload
        },

        setLoading: (state) => {
            state.loading = true
            state.error = false
        },

        setError: (state) => {
            state.error = true
            state.loading = false
        },

        setResults: (state, action) => {
              state.results = action.payload
              state.loading = false
        }
    }

})

export const {setError, setLoading, setQuery, setResults} = photoSlice.actions
export default photoSlice.reducer