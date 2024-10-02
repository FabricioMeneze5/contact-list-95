import styled from 'styled-components'

export const ContBody = styled.div`
  margin-bottom: 0.5rem;
  position: relative;
  flex-grow: 1;
  overflow-y: hidden;
`

export const ListCards = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  height: 100%;
  padding: 0 2rem 0.5rem;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
