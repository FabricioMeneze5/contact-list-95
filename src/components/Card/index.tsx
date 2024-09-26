import Button from '../Button'
import { ContCard, BackgroundCard, Form, ActionBar, Input } from './styles'

const Card = () => {
  return (
    <>
      <ContCard>
        <BackgroundCard>
          <Form>
            <li>
              <img src="../../images/person.svg" />
              <Input placeholder="Name" type="text" />
            </li>
            <li>
              <img src="../../images/phone.svg" />
              <Input placeholder="tel" type="number" />
            </li>
            <li>
              <img src="../../images/email.svg" />
              <Input placeholder="email" type="email" />
            </li>
          </Form>
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
