import { useSelector } from "react-redux";

const MyBooks = () => {
  const  books  = useSelector((state) => state.books.books);

  return (
    <div>
      {books && books?.length > 0 ? (
        <div>
          {books?.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </div>
      ) : (
        <p>There is no book available now. Please take a look later</p>
      )}
    </div>
  );
};

export default MyBooks;
