import styled from 'styled-components'

export const ContBody = styled.div`
  margin-bottom: 0.5rem;
  position: relative;
  overflow-y: hidden;
  height: 100%;
`

export const ListCards = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  align-content: start;
  height: 100%;
  padding: 0 2rem 0.5rem;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 1rem 0.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 0 1rem 0.5rem;
  }
`
