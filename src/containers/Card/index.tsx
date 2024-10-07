import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import Button from '../../components/Button'
import { GreenButton, RedButton } from '../../components/Button/styled'
import Input from '../../components/Input'
import { remove, edit } from '../../store/reducers/contacts'
import ContactsClass from '../../models/Contacts'

type Props = ContactsClass

const Card = ({
  name: startName,
  phone: startPhone,
  email: startEmail,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState(0)
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (startName.length > 0) {
      setName(startName)
    }
    if (startPhone && !isNaN(startPhone)) {
      setPhone(startPhone)
    }
    if (startEmail.length > 0) {
      setEmail(startEmail)
    }
  }, [startName, startPhone, startEmail])

  function cancelEdit() {
    setEditing(false)
    setName(startName)
    setPhone(startPhone)
    setEmail(startEmail)
  }

  function saveEdit() {
    edit({ name, phone, email, id })
    setEditing(false)
  }

  return (
    <>
      <S.ContCard>
        <S.Form>
          <ul>
            <S.Li>
              <S.Img src="../../../images/person.svg" />
              <Input
                disabled={!editing}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </S.Li>
            <S.Li>
              <S.Img src="../../../images/phone.svg" />
              <Input
                disabled={!editing}
                type="number"
                value={phone}
                onChange={(e) => setPhone(parseInt(e.target.value))}
              />
            </S.Li>
            <S.Li>
              <S.Img src="../../../images/email.svg" />
              <Input
                disabled={!editing}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </S.Li>
          </ul>
        </S.Form>
        <S.ActionBar>
          {editing ? (
            <>
              <GreenButton onClick={saveEdit}>Save</GreenButton>
              <RedButton onClick={cancelEdit}>Cancel</RedButton>
            </>
          ) : (
            <>
              <Button onClick={() => setEditing(true)}>Edit</Button>
              <RedButton onClick={() => dispatch(remove(id))}>Delete</RedButton>
            </>
          )}
        </S.ActionBar>
        <S.BackgroundCard />
      </S.ContCard>
    </>
  )
}

export default Card
