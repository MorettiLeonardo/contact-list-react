import { GenericButton } from './styles'

type Prop = {
  text: string
}

const Button = ({ text }: Prop) => <GenericButton>{text}</GenericButton>

export default Button
