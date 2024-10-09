import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import { RedButton } from '../../components/Button/styled'
import Input from '../../components/Input'
import Header from '../../containers/Header'
import { Container, ActionBar, Form } from './styled'
import Contact from '../../models/Contacts'
import { register as registerReducer } from '../../store/reducers/contacts'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState(Number)
  const [email, setEmail] = useState('')

  const registerContact = (event: FormEvent) => {
    event.preventDefault()

    const contactToAdd = new Contact(name, phone, email, 15)
    dispatch(registerReducer(contactToAdd))
    navigate('/')
  }

  return (
    <>
      <Header creatingContact={true} />
      <Container>
        <Form onSubmit={registerContact}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <Input
            type="number"
            placeholder="Phone"
            value={phone}
            onChange={({ target }) => setPhone(parseInt(target.value))}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <ActionBar>
            <Button type="submit">Add</Button>
            <RedButton onClick={() => navigate('/')}>Cancel</RedButton>
          </ActionBar>
        </Form>
      </Container>
    </>
  )
}

export default Register
