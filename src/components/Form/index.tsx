import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'

import { ActionBar, FormS, Container } from './styled'
import Button from '../../components/Button'
import { RedButton } from '../../components/Button/styled'
import Input from '../../components/Input'
import Contact from '../../models/Contacts'

import { register } from '../../store/reducers/contacts'
import { RootReducer } from '../../store'

type FormData = Contact

const Form = () => {
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
    console.log(phoneDuplicatade)
    console.log(emailDuplicatade)

    if (nameDuplicatade) {
      setError('name', {
        type: 'manual',
        message: 'Name already exists'
      })
    } else if (phoneDuplicatade) {
      setError('phone', {
        type: 'manual',
        message: 'Phone already exists'
      })
    } else if (emailDuplicatade) {
      setError('email', {
        type: 'manual',
        message: 'Email already exists'
      })
    } else {
      const contactToAdd = new Contact(name, phone, email, 0)
      dispatch(register(contactToAdd))
      alert('Created a new contact')
      navigate('/')
    }
  }
  return (
    <Container>
      <FormS>
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
      </FormS>
    </Container>
  )
}

export default Form
