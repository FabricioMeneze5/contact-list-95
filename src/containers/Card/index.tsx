import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import Button from '../../components/Button'
import { GreenButton, RedButton } from '../../components/Button/styled'
import Input from '../../components/Input'
import { remove } from '../../store/reducers/contacts'
import ContactsClass from '../../models/Contacts'

type Props = ContactsClass

const Card = ({ name, phone, email, id }: Props) => {
  const [editing, setEditing] = useState(Boolean)
  const dispatch = useDispatch()

  return (
    <>
      <S.ContCard>
        <S.Form>
          <ul>
            <S.Li>
              <S.Img src="../../../images/person.svg" />
              <Input type="text" value={name} />
            </S.Li>
            <S.Li>
              <S.Img src="../../../images/phone.svg" />
              <Input type="number" value={phone} />
            </S.Li>
            <S.Li>
              <S.Img src="../../../images/email.svg" />
              <Input type="email" value={email} />
            </S.Li>
          </ul>
        </S.Form>
        <S.ActionBar>
          {editing ? (
            <>
              <GreenButton>Save</GreenButton>
              <RedButton onClick={() => setEditing(false)}>Cancel</RedButton>
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
