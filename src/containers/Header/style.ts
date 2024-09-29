import styled from 'styled-components'
import colors from '../../styles/colors'

export const HeaderCont = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;
  width: 101%;
  height: auto;
  padding: 0.5rem;
  place-items: center;
  position: sticky;
  top: 0;
  background-color: ${colors.lightGrey};
  z-index: 2;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    margin-bottom: 0;
  }
`
export const H1 = styled.h1`
  font-family: 'VT323', monospace;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 2.4rem;
  }
`

export const SearchFill = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
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
  padding: 2px 0;
  outline: none;
`
