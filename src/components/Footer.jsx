import styled from "styled-components";
import { AlternateEmail, Facebook, Instagram, PhoneAndroid, Place, Twitter } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 40%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>KAcorps</Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quaerat exercitationem debitis minima harum porro adipisci, sed mollitia quia voluptatibus incidunt corporis sequi nobis repellendus id nemo itaque. Nemo, expedita?
            </Description>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
            <Title>Liens utiles</Title>
            <List>
                <ListItem>Acceuil</ListItem>
                <ListItem>Panier</ListItem>
                <ListItem>Magasine Homme</ListItem>
                <ListItem>Magasine Femme</ListItem>
                <ListItem>Mon compte</ListItem>
                <ListItem>Suivi de commande</ListItem>
                <ListItem>Liste de souhait</ListItem>
                <ListItem>Conditions</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contactez nous</Title>
            <ContactItem>
                <Place style={{marginRight:"10px"}}/>6 rue des champs élysées 75015 paris france
            </ContactItem>
            <ContactItem>
                <PhoneAndroid style={{marginRight:"10px"}}/>0636656565
            </ContactItem>
            <ContactItem>
                <AlternateEmail style={{marginRight:"10px"}}/>contact@KAcorps.dev
            </ContactItem>
            <Payment src="https://unehirondellefaitleprintemps.fr/wp-content/uploads/2021/03/Paiement-Securise-Stripe.jpg"/>
        </Right>
    </Container>
  )
}

export default Footer