import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { ContBody, ListCards } from './styles'
import Card from '../Card'
import AddButton from '../../components/AddButton'

const Body = () => {
  const { items } = useSelector((state: RootReducer) => state.contact)
  const { term } = useSelector((state: RootReducer) => state.filter)

  function filterContact() {
    let filteredContact = items

    if (term != undefined) {
      if (typeof term === 'string') {
        filteredContact = filteredContact.filter(
          (item) =>
            item.name.toLowerCase().search(term.toLocaleLowerCase()) >= 0 ||
            item.email.toLowerCase().search(term.toLocaleLowerCase()) >= 0 ||
            item.phone.toString().search(term)
          // corrigir o erro ao pesquisar por numero
        )
      } else if (typeof term === 'number') {
        filteredContact = filteredContact.filter((item) =>
          item.phone.toString().search(term.toString())
        )
      }
      return filteredContact
    } else {
      return items
    }
  }

  const contacts = filterContact()

  return (
    <ContBody>
      <AddButton>+</AddButton>
      <ListCards>
        {contacts.map((ctValue) => (
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
