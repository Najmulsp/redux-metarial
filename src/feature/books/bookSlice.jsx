import { createSlice } from "@reduxjs/toolkit";

const initialState = { books:
    [
        {
            id: 1,
            title: "bangla book",
            author: "Abul",
            price: 500
        },
        {
            id: 2,
            title: "English book",
            author: "Hablu",
            price: 350
        },
        {
            id: 3,
            title: "Mathematics book",
            author: "Mr Thomson",
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

export default bookSlice;