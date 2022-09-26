import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
margin: 20px;`
;

const FilterContainer = styled.div`
display: flex; 
justify-content: space-between;
`;

const Filter = styled.div`
margin: 20px;
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>ProductList
      <Navbar />
      <Announcement />
      <Title>Vêtements</Title>
      <FilterContainer>
        <Filter><FilterText>Filtrer les produits:</FilterText>
        <Select>
          <Option disabled selected>
            Couleur
          </Option>
          <Option>Blanc</Option>
          <Option>Noir</Option>
          <Option>Bleu</Option>
          <Option>Violet</Option>
          <Option>Jaune</Option>
        </Select>
        <Select>
          <Option disabled selected>
            Taille
          </Option>
          <Option>Xs</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
        </Select>
        </Filter>
        <Filter><FilterText>Trier les produits:</FilterText>
        <Select>
          <Option selected>
            Nouveautés
          </Option>
          <Option>Prix (plus grand)</Option>
          <Option>Prix (plus petit)</Option>
        </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList