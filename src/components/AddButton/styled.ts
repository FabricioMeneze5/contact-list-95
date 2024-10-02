import styled from 'styled-components'
import colors from '../../styles/colors'

export const SAddButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background-color: ${colors.green};
  width: 50px;
  height: 50px;
  border: solid 1px #fff;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  z-index: 2;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    box-shadow: 0 0 7px 1px;
  }
`
