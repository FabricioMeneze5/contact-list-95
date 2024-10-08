import { ButtonHTMLAttributes } from 'react'
import * as S from './styled'

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <S.Button {...props}>{children}</S.Button>
}

export default Button
