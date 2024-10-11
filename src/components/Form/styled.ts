import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormS = styled.form`
  width: 100%;
  max-width: 350px;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${colors.bgCard};
  border: solid 1px black;
  box-shadow: 1px 1px 3px;

  span {
    display: block;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0.5rem;
    background-color: ${colors.red};
  }
`

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
`
