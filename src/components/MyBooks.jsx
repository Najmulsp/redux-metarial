import { useSelector } from "react-redux";
import { Typography, Button, IconButton, Box, TextField, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from "@mui/material";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import Form from "../feature/books/Form";

const MyBooks = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <>
      {books && books?.length > 0 ? (
        <div>
          {books?.map((book) => (
            <Card sx={{ maxWidth: 345, margin: "10px" }}
             key={book.id}

            >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              component={"img"}
              height="194"
              image={book.image}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              {/* <ExpandMore
                expand={expanded}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore> */}
            </CardActions>
            <Collapse  timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                  aside for 10 minutes.
                </Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                  medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                  occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                  large plate and set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                  stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  Add rice and stir very gently to distribute. Top with artichokes and
                  peppers, and cook without stirring, until most of the liquid is absorbed,
                  15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                  mussels, tucking them down into the rice, and cook again without
                  stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don&apos;t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
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


                        {/* card */}
    <Card sx={{maxWidth: 300}}>
      <CardMedia
      component={"img"}
      height="140"
      image="https://media.istockphoto.com/id/184103864/photo/clouds-on-sky.jpg?s=2048x2048&w=is&k=20&c=GA5nEQ2WxJjoEOq9vqkW3gteAtA12C3wdsyT53BaPwg="
      alt="test image"
      />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Web Design
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ipsum?
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">Share</Button>
      <Button size="small" color="primary">Delete</Button>
    </CardActions>
    </Card>
    <Dialog open={true}>
      <DialogTitle>Are You Sure</DialogTitle>
      <DialogContent>
        <DialogContentText>are you sure to delete this products ?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Delete</Button>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default MyBooks;
