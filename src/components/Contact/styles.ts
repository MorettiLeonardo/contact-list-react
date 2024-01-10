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

export const Infos = styled.div`
  margin-right: 10%;
  p {
    padding-bottom: 4px;
  }
`
