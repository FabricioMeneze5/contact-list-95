import styled from 'styled-components'
import colors from '../../styles/colors'

export const ContCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: 100%;
  padding: 8px;
  position: relative;
  border-radius: 8px;

  &:hover > div {
    height: 100%;
  }
`

export const BackgroundCard = styled.div`
  background-color: ${colors.bgCard};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 85%;
  border: solid 1px black;
  border-radius: 8px;
  transition: all ease 0.3s;
`

export const Form = styled.form`
  width: 100%;
  z-index: 1;
`

export const Li = styled.li`
  display: flex;
  align-items: end;
  justify-content: center;
  height: 35px;
  margin-bottom: 8px;
`

export const Img = styled.img`
  height: 100%;
`

export const Input = styled.input`
  font-size: 20px;
  padding: 5px;
  background-color: #fff;
  border: solid 1px #000000;
  outline: none;
  margin-left: 8px;
`

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
`
