import Button from '../Button'
import { RedButton } from '../Button/styled'
import Input from '../Input'
import * as S from './styles'

const Card = () => {
  return (
    <>
      <S.ContCard>
        <S.Form>
          <ul>
            <S.Li>
              <S.Img src="../../../images/person.svg" />
              <Input />
            </S.Li>
            <S.Li>
              <S.Img src="../../../images/phone.svg" />
              <Input />
            </S.Li>
            <S.Li>
              <S.Img src="../../../images/email.svg" />
              <Input />
            </S.Li>
          </ul>
        </S.Form>
        <S.ActionBar>
          <Button>Edit</Button>
          <RedButton>Delete</RedButton>
        </S.ActionBar>
        <S.BackgroundCard />
      </S.ContCard>
    </>
  )
}

export default Card
