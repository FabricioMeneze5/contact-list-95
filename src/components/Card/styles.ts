import styled from 'styled-components'
import colors from '../../styles/colors'

export const ContCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: 100%;
  padding: 1rem;
  position: relative;
  border-radius: 0.5rem;

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
  border-radius: 0.5rem;
  transition: all ease 0.3s;
  box-shadow: 1px 1px 3px;
`

export const Form = styled.form`
  width: 100%;
  z-index: 1;
`

export const Li = styled.li`
  display: flex;
  align-items: end;
  justify-content: center;
  height: 2rem;
  margin-bottom: 0.5rem;
`

export const Img = styled.img`
  height: 100%;
`

export const Input = styled.input`
  font-size: 1.3rem;
  padding: 5px;
  width: 80%;
  background-color: #fff;
  border: solid 1px #000000;
  outline: none;
  margin-left: 0.5rem;
`

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.5rem;
  z-index: 1;
`
