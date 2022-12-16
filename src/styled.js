import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
`;
const Button = styled.button`
  width: 80px;
  margin-top: 30px;
`;
export { Container, Form, Button, Wrapper };
