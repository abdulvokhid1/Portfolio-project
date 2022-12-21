import { useNavigate } from "react-router-dom";
import { Container, Wrapper } from "./Style";

function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>This is my Profile</h1>
      <p>You may find information about me in this page</p>
      <button onClick={() => navigate("/order-summary")}>please order</button>
    </Container>
  );
}
export default Home;
