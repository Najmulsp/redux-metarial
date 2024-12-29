import { useSelector } from "react-redux";


const MyBooks = () => {

const books = useSelector(state => console.log(state));
console.log(books)

    return (
        <div>
            {
                books && books?.length > 0 ?
                <div>
                    {
                        books?.map(book =>
                            <li key={book.id}>
                                {
                                    book.title
                                }
                            </li>
                        )
                    }
                </div>
                :
                <p>There is no book available now. Please take a look later</p>
            }
        </div>
    );
};

export default MyBooks;