import styled from 'styled-components'

export const Card = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  :last-child {
    display: inline;
  }
`
export const InfosEdit = styled.textarea`
  font-size: 16px;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Infos = styled.div`
  margin-right: 10%;
  p {
    padding-bottom: 4px;
  }
`
