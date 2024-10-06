import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import AddButton from '../../components/AddButton'
import Card from '../../components/Card'
import { ContBody, ListCards } from './styles'

const Body = () => {
  const { contact } = useSelector((state: RootReducer) => state)

  return (
    <ContBody>
      <AddButton>+</AddButton>
      <ListCards>
        {contact.items.map((ctValue) => (
          <li key={ctValue.id}>
            <Card
              name={ctValue.name}
              phone={ctValue.phone}
              email={ctValue.email}
              id={ctValue.id}
            />
          </li>
        ))}
      </ListCards>
    </ContBody>
  )
}

export default Body
