import { useState } from "react";

import { Header } from "src/components/Header/Header";
import { Content } from "src/components/Content/Content";

import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Helmet } from "react-helmet";

const TodolistPage = () => {
  const [todolist, setTodolist] = useState([]);
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

  const onSubmit = (value) => {
    // get value
    // push to todolist state
    if (value) {
      setJustAdded(value);
      setTodolist([...todolist, value]);
      onOpenSnakbar(value);
    }
  };

  const onRemove = (idx) => {
    // eslint-disable-next-line
    const updated = todolist.filter((_, i) => i != idx);
    setTodolist(updated);
  };

  return (
    <>
      <Helmet>
        <title>Todolist | Techready</title>
      </Helmet>
      <div className="App">
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
        <Container maxWidth="sm">
          <h1>REA4C Todo List</h1>
          <Header onSubmit={onSubmit} />
          <Content data={todolist} onRemove={onRemove} />
        </Container>
      </div>
    </>
  );
};

export default TodolistPage;
