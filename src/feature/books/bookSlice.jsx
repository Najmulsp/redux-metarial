import { createSlice } from "@reduxjs/toolkit";

const initialState = { books:
    [
        {
            id: 1,
            title: "bangla book",
            author: "Abul",
            image: "https://ibb.co.com/NYMgc4B",
            price: 500
        },
        {
            id: 2,
            title: "English book",
            author: "Hablu",
            image: "https://ibb.co.com/RP16xt5",
            price: 350
        },
        {
            id: 3,
            title: "Mathematics book",
            author: "Mr Thomson",
            image: "https://ibb.co.com/bgmGVjn",
            price: 550
        },
    ]
}


export const bookSlice = createSlice({
    name: "bookList",
    initialState,
    reducers: {

    }
});

export default bookSlice.reducer;