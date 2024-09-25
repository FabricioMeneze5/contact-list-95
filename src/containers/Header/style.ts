import styled from 'styled-components'

export const HeaderCont = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const H1 = styled.h1`
  font-family: 'VT323', monospace;
  font-size: 48px;
`

export const SearchFill = styled.div`
  width: 50%;
  height: 40px;
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
  background-image: url('https://www.svgrepo.com/show/532552/search-alt-2.svg');
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
