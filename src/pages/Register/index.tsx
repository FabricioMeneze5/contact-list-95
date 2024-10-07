import Button from '../../components/Button'
import { RedButton } from '../../components/Button/styled'
import Input from '../../components/Input'
import Header from '../../containers/Header'
import { Container, ActionBar, Form } from './styled'

const Register = () => {
  return (
    <>
      <Header creatingContact={true} />
      <Container>
        <Form>
          <Input type="text" placeholder="Name" />
          <Input type="number" placeholder="Phone" />
          <Input type="email" placeholder="Email" />
          <ActionBar>
            <Button>Add</Button>
            <RedButton>Cancel</RedButton>
          </ActionBar>
        </Form>
      </Container>
    </>
  )
}

export default Register
