import styled from 'styled-components'
import colors from '../../styles/colors'

export const Button = styled.button`
  width: 8rem;
  padding: 3px;
  margin: 0 3px 0 3px;
  font-family: 'VT323', monospace;
  font-size: 1.4rem;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${colors.blue};
`

export const RedButton = styled(Button)`
  background-color: ${colors.red};
`

export const GreenButton = styled(Button)`
  background-color: ${colors.green};
`
