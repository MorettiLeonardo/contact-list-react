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
  width: 100%;
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 8px;
  border: none;
  background-color: #95a5a6;
  color: #ecf0f1;
  border-radius: 1rem;
`

export default GlobalStyle
