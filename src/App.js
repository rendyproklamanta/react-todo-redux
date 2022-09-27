import "./App.css";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Header } from "src/components/Header/Header";
import { Content } from "src/components/Content/Content";

function App() {
  const [todolist, setTodolist] = useState([]);

  const onSubmit = (value) => {
    // get value
    // push to todolist state
    if (value) {
      setTodolist([...todolist, value]);
    }
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <h1>REA4C Todo List</h1>
        <Header onSubmit={onSubmit} />
        <Content data={todolist} />
      </Container>
    </div>
  );
}

export default App;
