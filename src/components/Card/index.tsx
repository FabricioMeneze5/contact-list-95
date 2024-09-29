import Button from '../Button'
import * as S from './styles'

const Card = () => {
  return (
    <>
      <S.ContCard>
        <S.Form>
          <ul>
            <S.Li>
              <S.Img src="../../../images/person.svg" />
              <S.Input placeholder="Name" type="text" />
            </S.Li>
            <S.Li>
              <S.Img src="../../../images/phone.svg" />
              <S.Input placeholder="tel" type="number" />
            </S.Li>
            <S.Li>
              <S.Img src="../../../images/email.svg" />
              <S.Input placeholder="email" type="email" />
            </S.Li>
          </ul>
        </S.Form>
        <S.ActionBar>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </S.ActionBar>
        <S.BackgroundCard />
      </S.ContCard>
    </>
  )
}

export default Card
