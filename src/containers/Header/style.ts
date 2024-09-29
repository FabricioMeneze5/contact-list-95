import styled from 'styled-components'

export const HeaderCont = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
`
export const H1 = styled.h1`
  font-family: 'VT323', monospace;
  font-size: 3rem;
`

export const SearchFill = styled.div`
  width: 50%;
  height: 2rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 0.5rem;
  border: solid 1px #000000;
`

export const ButtonSearch = styled.button`
  width: 2rem;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  background-image: url('../../../images/search.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  transform: scaleX(-1);
`
export const InputSearch = styled.input`
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  outline: none;
`
