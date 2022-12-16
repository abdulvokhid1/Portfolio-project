import { useNavigate } from "react-router-dom";
import { Container, Wrapper } from "./Style";

function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>Home</h1>
      <button onClick={() => navigate("/order-summary")}>please order</button>
    </Container>
  );
}
export default Home;
