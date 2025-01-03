import { createSlice } from "@reduxjs/toolkit";

const initialState = { books:
    [
        {
            id: 1,
            title: "bangla book",
            author: "Abul",
            image: "https://i.ibb.co.com/DwXDpRy/laptop-repair.jpg",
            price: 500
        },
        {
            id: 2,
            title: "English book",
            author: "Hablu",
            image: "https://i.ibb.co.com/1KpTmvH/the-boy-as-dog.webp",
            price: 350
        },
        {
            id: 3,
            title: "Mathematics book",
            author: "Mr Thomson",
            image: "https://i.ibb.co.com/Dzzdp04/the-last-empire.webp",
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