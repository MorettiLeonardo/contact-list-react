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
  width: 300px;
  resize: none;
  border: none;
  background-color: transparent;
  margin-bottom: 8px;
`

export const Infos = styled.div`
  margin-right: 2%;
  p {
    padding-bottom: 4px;
  }
`
