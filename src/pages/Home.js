import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home | Techready</title>
      </Helmet>
      <Container>
        <h2>Hello I'm Index</h2>
        <Link to="/about">About</Link>
        <br />
        <Link to="/todolist">TodoList</Link>
      </Container>
    </>
  );
};

export default HomePage;
