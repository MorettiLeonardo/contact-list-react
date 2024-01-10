import { MainTitle } from './styles'

type Prop = {
  TitleText: string
}

const Title = ({ TitleText }: Prop) => <MainTitle>{TitleText}</MainTitle>

export default Title
