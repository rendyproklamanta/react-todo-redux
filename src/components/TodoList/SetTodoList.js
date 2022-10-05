import { TextField } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD, DELETE } from "../../store/types/todoList";

export const SetTodoList = () => {
   const dispatch = useDispatch();
   const [value, setValue] = useState("");

   const onSubmit = (value) => {
      dispatch({ type: ADD, payload: value });
   };

   return (
      <TextField
         id="outlined-basic"
         label="Todo"
         variant="outlined"
         className=""
         style={{ marginBottom: "2rem", width: "100%" }}
         value={value}
         onChange={(e) => setValue(e.target.value)}
         onKeyDown={(e) => {
            if (e.code === "Enter") {
               onSubmit(value);
               setValue("");
            }
         }}
      />
   );
};