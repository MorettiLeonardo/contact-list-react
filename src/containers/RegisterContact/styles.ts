import styled from 'styled-components'

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 16px;

  h1 {
    font-size: 27px;
  }

  button {
    width: 300px;
  }
`

export const Field = styled.input`
  border: none;
  padding: 10px;
  margin-bottom: 8px;
  width: 300px;
  border-radius: 1rem;
`
