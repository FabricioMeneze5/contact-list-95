import styled from 'styled-components'
import colors from '../../styles/colors'

export const HeaderCont = styled.header`
  position: sticky;
  top: 0;
  padding: 0.5rem 2rem 0.3rem;
  border-radius: 0.5rem 0.5rem 0 0;
  margin-bottom: 0.2rem;
  z-index: 2;
  background-color: ${colors.lightGrey};

  @media (max-width: 640px) {
    padding: 0.5rem 2rem 0.5rem;
    margin-bottom: 0;
  }
`
export const GridCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const H1 = styled.h1`
  font-family: 'VT323', monospace;
  font-size: 3rem;
  text-align: center;
  user-select: none;

  @media (max-width: 640px) {
    font-size: 2.4rem;
    margin-bottom: 0.3rem;
  }
`

export const SearchFill = styled.div`
  display: flex;
  height: 90%;
  background-color: #fff;
  border-radius: 0.5rem;
  border: solid 1px #000000;
  background-image: url('../../../images/search.svg');
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
`

export const InputSearch = styled.input`
  height: 100%;
  width: 100%;
  margin-left: 40px;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  padding-left: 2px;
  outline: none;

  @media (max-width: 640px) {
    margin-left: 30px;
  }
`
