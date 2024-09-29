import * as S from './styled'

type Props = {
  children: string
}
const Button = ({ children }: Props) => {
  return <S.Button type="button">{children}</S.Button>
}

export default Button
