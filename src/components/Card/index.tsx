import { useDispatch } from 'react-redux'

import Button from '../Button'
import { RedButton } from '../Button/styled'
import Input from '../Input'
import * as S from './styles'
import { remove } from '../../store/reducers/contacts'
import ContactsClass from '../../models/Contacts'

type Props = ContactsClass

const Card = ({ name, phone, email, id }: Props) => {
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
          <Button>Edit</Button>
          <RedButton onClick={() => dispatch(remove(id))}>Delete</RedButton>
        </S.ActionBar>
        <S.BackgroundCard />
      </S.ContCard>
    </>
  )
}

export default Card
