import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Wrapper } from "./Style";
import { memo } from "react";

function Home({ title }) {
  console.log("Home rendered");
  const navigate = useNavigate();
  return (
    <Container>
      <h1>This is my Profile</h1>
      <p>You may find information about me in this page</p>
      <p>{title}</p>
      <button onClick={() => navigate("/order-summary")}>please order</button>
    </Container>
  );
}
export default memo(Home);
