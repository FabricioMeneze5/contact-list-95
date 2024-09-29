import AddButton from '../../components/AddButton'
import Card from '../../components/Card'
import { ListCards } from './styles'

const Body = () => {
  return (
    <>
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
      </ListCards>
      <AddButton>+</AddButton>
    </>
  )
}

export default Body
