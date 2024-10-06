import { ButtonHTMLAttributes } from 'react'
import { SAddButton } from './styled'

const AddButton = ({ children }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <SAddButton to="/register">{children}</SAddButton>
}

export default AddButton
