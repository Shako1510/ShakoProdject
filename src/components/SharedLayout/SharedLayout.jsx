import { Outlet } from 'react-router-dom'
import { Container, Header, Logo, Link } from './SharedLayoutStyled'

export const SharedLayout = () => {


    return (
        <Container>
            <Header>
                <Logo>
                    SHAKO
                </Logo>
                <nav>
                    <Link to='./' end> About</Link>
                    <Link to='./projects'> Projects</Link>
                    <Link to='./what'> What we do</Link>
                    <Link to='./career'>Career</Link>
                    <Link to='./contacts'>Contacts</Link>

                </nav>
            </Header>
            <Outlet />
        </Container>
    )
}