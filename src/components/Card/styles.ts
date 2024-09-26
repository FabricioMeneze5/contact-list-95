import styled from 'styled-components'
import colors from '../../styles/colors'

export const ContCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 110%;
  background-color: yellow;
  border-radius: 8px;
`

export const BackgroundCard = styled.div`
  background-color: ${colors.bgCard};
  width: 100%;
  padding: 0 8px 8px 8px;
  border: solid 1px black;
  border-radius: 8px;
`

export const Form = styled.ul`
  display: block;
  text-align: center;
`

export const Input = styled.input`
  font-size: 20px;
  padding: 5px;
  background-color: #fff;
  border: solid 1px #000000;
  outline: none;
  margin-bottom: 8px;
  margin-left: 8px;
`

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
