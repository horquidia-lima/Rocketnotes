import {Container} from './styles.js'

import { Button } from '../../components/Button'

export function Details(){
  return (
    <Container>
      <Button title="button1" loading/>
      <Button title="button2"/>
      <Button title="button3"/>
    </Container>
  )
}