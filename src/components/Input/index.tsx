import { InputHTMLAttributes } from 'react'
import { SInput } from './styled'

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <SInput {...props} />
}

export default Input
