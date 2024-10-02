import { SAddButton } from './styled'

type Props = {
  children: string
}

const AddButton = ({ children }: Props) => {
  return <SAddButton to="/register">{children}</SAddButton>
}

export default AddButton
