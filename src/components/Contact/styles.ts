import styled from 'styled-components'

type Props = {
  active: boolean
}

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
export const InfosEdit = styled.textarea<Props>`
  font-size: 16px;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
  font-style: ${(props) => (props.active ? 'italic' : 'normal')};
`

export const Infos = styled.div`
  margin-right: 10%;
  p {
    padding-bottom: 4px;
  }
`
