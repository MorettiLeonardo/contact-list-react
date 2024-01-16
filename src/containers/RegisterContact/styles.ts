import styled from 'styled-components'

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 16px;

  label {
    display: block;
  }

  input {
    padding: 8px;
    margin-bottom: 8px;
    width: 300px;
  }

  button {
    width: 300px;
    padding: 8px;
    cursor: pointer;
    margin: 8px 0;
    font-size: 14px;
  }

  a {
    width: 300px;
    text-align: center;
    padding: 8px;
    font-size: 14px;
  }
`
