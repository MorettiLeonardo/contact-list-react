import styled from 'styled-components'

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 16px;

  input {
    border: none;
    padding: 8px;
    margin-bottom: 8px;
    width: 300px;
    border-radius: 1rem;
  }

  button {
    width: 300px;
    background-color: #95a5a6;
    color: #ecf0f1;
    border-radius: 1rem;
  }
`
