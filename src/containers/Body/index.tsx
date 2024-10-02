import AddButton from '../../components/AddButton'
import Card from '../../components/Card'
import { ContBody, ListCards } from './styles'

const Body = () => {
  return (
    <ContBody>
      <AddButton>+</AddButton>
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
    </ContBody>
  )
}

export default Body
