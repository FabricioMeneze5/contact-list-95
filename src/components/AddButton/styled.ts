import styled from 'styled-components'
import colors from '../../styles/colors'

export const SAddButton = styled.button`
  background-color: ${colors.green};
  padding: 5px;
  width: 50px;
  height: 50px;
  border: solid 1px #fff;
  position: fixed;
  bottom: 10%;
  right: 20%;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  z-index: 2;
  cursor: pointer;

  @media (max-width: 1023px) {
    bottom: 7%;
    right: 10%;
  }

  @media (max-width: 640px) {
    bottom: 5%;
    right: 7%;
  }
`
