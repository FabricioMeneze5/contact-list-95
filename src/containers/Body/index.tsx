import AddButton from '../../components/AddButton'
import Card from '../../components/Card'
import { ContBody, ListCards } from './styles'

const Body = () => {
  return (
    <ContBody>
      <ListCards>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ListCards>
      <AddButton>+</AddButton>
    </ContBody>
  )
}

export default Body
