import { FiArrowLeft, FiUser,FiMail, FiLock } from "react-icons/fi";
import { Container, Form } from "./styles";
import { Input} from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
    return(
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft/>
                </a>
            </header>

            <Form>
                <Input
                    placeholder='Horquidia Lima'
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder='quida@gmail.com'
                    type="email"
                    icon={FiMail}
                />

                <Input
                    placeholder='Senha atual'
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder='Nova senha'
                    type="password"
                    icon={FiLock}
                />

                <Button title='Salvar'/>
            </Form>
        </Container>
    )
}