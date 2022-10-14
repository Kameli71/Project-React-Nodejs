import { Link } from "react-router-dom";
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })};
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })};
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: "10px" })};
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })};
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })};
    cursor: pointer;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center", marginRight: "11px" })};
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>FR</Language>
                <SearchContainer>
                    <Input placeholder="Rechercher" />
                    <Search style={{color: "gray", fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    <Link className="link" to="/">
                        K.K
                    </Link>
                </Logo>
            </Center>
            <Right>
                <MenuItem>
                    <Link className="link" to="/register">
                        Créer un compte
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link className="link" to="/login">
                        Connectez vous
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="secondary">
                        <Link className="link" to="/cart">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Link>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar