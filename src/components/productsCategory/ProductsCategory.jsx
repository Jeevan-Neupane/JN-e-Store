import React from "react";
import {
  AllProducts,
  Container,
  Header,
  ProductCategoryDiv,
  Title,
} from "./style";
import HomeCategories from "../homeCategories/HomeCategories";

function ProductCategory() {
  return (
    <Container>
      <Header>
        <Title>Categories</Title>
        <AllProducts
          to='/products'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          All Products
        </AllProducts>
      </Header>
      <ProductCategoryDiv>
        <HomeCategories />
      </ProductCategoryDiv>
    </Container>
  );
}

export default ProductCategory;
