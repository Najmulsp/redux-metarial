import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";
import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
} from "@mui/material";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();
  return (
    <div>
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
    </div>
  );
};

export default CounterView;
