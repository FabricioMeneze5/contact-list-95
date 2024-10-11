import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'

import Button from '../../components/Button'
import { RedButton } from '../../components/Button/styled'
import Input from '../../components/Input'
import Header from '../../containers/Header'
import { Container, ActionBar, Form } from './styled'
import Contact from '../../models/Contacts'
import { register } from '../../store/reducers/contacts'
import { RootReducer } from '../../store'

type FormData = Contact

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items } = useSelector((state: RootReducer) => state.contact)
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>()

  const registerContact = (data: FormData) => {
    const { email, phone, name } = data

    const nameDuplicatade = items.some(
      (c) => c.name.toLowerCase() === data.name.toLowerCase()
    )
    const emailDuplicatade = items.some(
      (c) => c.email.toLowerCase() === data.email.toLowerCase()
    )

    const phoneDuplicatade = items.some((c) => c.phone === data.phone)

    console.log(nameDuplicatade)
    console.log(emailDuplicatade)
    console.log(phoneDuplicatade)

    if (nameDuplicatade) {
      setError('name', {
        type: 'manual',
        message: 'Name already exists'
      })
    } else if (emailDuplicatade) {
      setError('phone', {
        type: 'manual',
        message: 'Phone already exists'
      })
    } else if (phoneDuplicatade) {
      setError('email', {
        type: 'manual',
        message: 'Email already exists'
      })
    } else {
      const contactToAdd = new Contact(name, phone, email, 0)
      dispatch(register(contactToAdd))
      navigate('/')
    }
  }

  return (
    <>
      <Header creatingContact={true} />
      <Container>
        <Form>
          <Controller
            control={control}
            name="name"
            rules={{
              required: 'Name is required',
              minLength: {
                message: 'Invalid name',
                value: 3
              },
              pattern: {
                message: 'Invalid name field',
                value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
              }
            }}
            render={({ field: { value, onChange } }) => (
              <Input placeholder="Name" value={value} onChange={onChange} />
            )}
          />
          <span>{errors.name?.message}</span>

          <Controller
            control={control}
            name="phone"
            rules={{
              required: 'Phone is required',
              pattern: {
                message: 'Invalid phone',
                value: /^9\d{8}$/
              }
            }}
            render={({ field: { value, onChange } }) => (
              <Input placeholder="Phone" value={value} onChange={onChange} />
            )}
          />
          <span>{errors.phone?.message}</span>

          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email is required',
              pattern: {
                message: 'Invalid email',
                value: /^[a-z0-9._%-]+@[a-z0-9-]+\.[a-z]/i
              }
            }}
            render={({ field: { value, onChange } }) => (
              <Input placeholder="Email" value={value} onChange={onChange} />
            )}
          />
          <span>{errors.email?.message}</span>
          <ActionBar>
            <Button onClick={handleSubmit(registerContact)}>Add</Button>
            <RedButton onClick={() => navigate('/')}>Cancel</RedButton>
          </ActionBar>
        </Form>
      </Container>
    </>
  )
}

export default Register
