import EstiloGlobal from './styles'
import Header from './containers/Header'
import { Container } from './styles/index'
import ContactList from './containers/ContactList'
import Form from './containers/Form'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Container>
        <ContactList></ContactList>
        <Form />
      </Container>
    </>
  )
}

export default App