import {RiShutDownLine} from 'react-icons/ri'
import {Container, Profile, Logout} from './styles'

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/horquidia-lima.png" alt="Foto do usuario" />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Horquidia Lima</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
            
        </Container>
    )
}