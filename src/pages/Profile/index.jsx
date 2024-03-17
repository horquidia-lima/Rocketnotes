import { FiArrowLeft, FiUser,FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
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
                <Avatar>
                    <img 
                        src="https://github.com/horquidia-lima.png" 
                        alt="Foto do usuario" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input 
                            id="avatr"
                            type="file"
                        />
                    </label>
                </Avatar>
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