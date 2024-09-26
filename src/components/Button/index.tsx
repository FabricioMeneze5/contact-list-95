type Props = {
  children: string
}
const Button = ({ children }: Props) => {
  return <button type="button">{children}</button>
}

export default Button
