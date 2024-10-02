import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  height: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 192px;
  margin-top: 4rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${colors.bgCard};
  border: solid 1px black;
  box-shadow: 1px 1px 3px;
`

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
`
