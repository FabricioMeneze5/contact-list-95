import Button from '../Button'
import { ContCard, BackgroundCard, Li, Img, ActionBar, Input } from './styles'

const Card = () => {
  return (
    <>
      <ContCard>
        <BackgroundCard>
          <form>
            <ul>
              <Li>
                <Img src="../../../images/person.svg" />
                <Input placeholder="Name" type="text" />
              </Li>
              <Li>
                <Img src="../../../images/phone.svg" />
                <Input placeholder="tel" type="number" />
              </Li>
              <Li>
                <Img src="../../../images/email.svg" />
                <Input placeholder="email" type="email" />
              </Li>
            </ul>
          </form>
          <ActionBar>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </ActionBar>
        </BackgroundCard>
      </ContCard>
    </>
  )
}

export default Card
