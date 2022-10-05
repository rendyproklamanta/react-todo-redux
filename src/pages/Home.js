import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { Helmet } from "react-helmet";
import { Counter } from "src/components/Counter/Counter";
import { SetCounter } from "src/components/Counter/SetCounter";

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
            <Counter />
            <SetCounter />
         </Container>
      </>
   );
};

export default HomePage;
