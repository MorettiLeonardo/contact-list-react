import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
`

export default GlobalStyle
