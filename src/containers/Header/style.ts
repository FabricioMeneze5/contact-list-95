import styled from 'styled-components'

export const HeaderCont = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 32px;
`
export const H1 = styled.h1`
  font-family: 'VT323', monospace;
  font-size: 48px;
`

export const SearchFill = styled.div`
  width: 50%;
  height: 32px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  border: solid 1px #000000;
`

export const ButtonSearch = styled.button`
  width: 32px;
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
  font-size: 32px;
  outline: none;
`
