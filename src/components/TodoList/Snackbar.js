import React from 'react'
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function Snackbar() {

   const [openSnakbar, setOpenSnakbar] = useState(null);
   const [justAdded, setJustAdded] = useState("");

   const onOpenSnakbar = (value) => {
      setOpenSnakbar(value);
   };

   const onCloseSnakbar = () => {
      setOpenSnakbar(null);
   };

   const onUndoSnakbar = () => {
      const updated = todolist;
      updated.pop();
      setTodolist(updated);
      onCloseSnakbar();
   };

   return (
      <Snackbar
         open={openSnakbar}
         autoHideDuration={6000}
         onClose={onCloseSnakbar}
         message={`${justAdded} just added to the list`}
         action={
            <>
               <Button color="secondary" size="small" onClick={onUndoSnakbar}>
                  UNDO
               </Button>
               <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={onCloseSnakbar}
               >
                  <CloseIcon fontSize="small" />
               </IconButton>
            </>
         }
      />
   )
}

export default Snackbar

