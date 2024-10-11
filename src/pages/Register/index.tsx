import Header from '../../containers/Header'
import { Container } from './styled'

import Form from '../../components/Form'

const Register = () => {
  return (
    <>
      <Header creatingContact={true} />
      <Container>
        <Form />
      </Container>
    </>
  )
}

export default Register
