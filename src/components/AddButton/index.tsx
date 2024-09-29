import { SAddButton } from './styled'

type Props = {
  children: string
}

const AddButton = ({ children }: Props) => {
  return <SAddButton type="button">{children}</SAddButton>
}

export default AddButton
