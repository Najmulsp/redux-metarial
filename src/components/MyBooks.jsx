import { useSelector } from "react-redux";
import { Typography, Button, IconButton, Box, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Form from "../feature/books/Form";

const MyBooks = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <>
      {books && books?.length > 0 ? (
        <div>
          {books?.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </div>
      ) : (
        <p>There is no book available now. Please take a look later</p>
      )}
      <section>
                    {/* Typography */}
        <Typography variant="h3" component={"h1"} sx={{color: "skyblue"}}>
            I am exploring material ui
        </Typography>


                       {/* Button */}
        {/* ডকুমেন্ট দেখে বাটন এর কালার, সাইজ, আইকন ওয়ালা বাটন, আইকন বাটন, টগল বাটন, বাটন গ্রুপ ইত্যাদি বসানো যায়*/}
        <Button variant="text" sx={{margin: "5px"}}>Click Me</Button>
        <Button variant="contained" sx={{margin: "5px"}}>Contained</Button>
        <Button variant="contained" color="success" sx={{margin: "5px"}}>Click Me</Button>
        <Button variant="outlined" sx={{margin: "5px"}}>Outlined</Button>
        <IconButton aria-label="delete" sx={{margin: "5px"}}>
  <DeleteIcon />
</IconButton>
                            {/* Text Field */}
                            <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" type="text" variant="standard" placeholder="Email" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
      </section>
      <Form />
    </>
  );
};

export default MyBooks;
