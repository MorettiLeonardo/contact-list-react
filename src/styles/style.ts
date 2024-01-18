import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ecf0f1;
  }
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  max-width: 1270px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`

export const GenericButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 1rem;
  padding: 10px;
  margin-bottom: 8px;
  background-color: #95a5a6;
  color: #ecf0f1;
  display: inline-block;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background-color: rgba(129, 165, 166, 0.9);
  }
`

export default GlobalStyle
