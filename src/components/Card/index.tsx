import Button from '../Button'
import { ContCard, BackgroundCard, Form, ActionBar } from './styles'

const Card = () => {
  return (
    <>
      <ContCard>
        <BackgroundCard>
          <Form>
            <li>
              <img src="#" />
              <input placeholder="Name" type="text" />
            </li>
            <li>
              <img src="#" />
              <input placeholder="tel" type="number" />
            </li>
            <li>
              <img src="#" />
              <input placeholder="email" type="email" />
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
