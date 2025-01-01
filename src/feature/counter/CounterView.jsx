import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";
import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  Grid2,
  Box,
  
} from "@mui/material";
// import {Stack,Item } from '@mui/material/Stack';

import { fetchPosts } from "../posts/postSlice";
import Todos from "../todos/Todos";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const posts = useSelector((state) => state.posts);
  const myPosts =posts?.posts;

  const dispatch = useDispatch();

  useEffect(()=>{
dispatch(fetchPosts())
  },[])
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h4" align="center">
            Count App
          </Typography>
        </Toolbar>
      </AppBar>
      <p>count : {count}</p>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button onClick={() => dispatch(reset())}>Reset</Button>
<section>
  <Todos />
</section>
      <div>
        {
         myPosts?.slice(0, 10).map(post =>
          <Grid2 key={post.id} container display="flex" spacing={4} justify="center" alignItems="center">
              <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                <Typography variant="h4">{post.title}</Typography>
                <p>{post.body}</p>
              </Box >
            </Grid2>

         )
        }
      </div>
    </>
  );
};

export default CounterView;
