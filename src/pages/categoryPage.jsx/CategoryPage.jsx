import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchCatagoriesProductsQuery } from "../../store/store";
import { CategoryPageMain } from "../../style/Container";
import { CategoryProductList, ForYou, ToTop } from "../../components";

function CategoryPage() {
  const { name } = useParams();
  const { data, isFetching, isError, isLoading } =
    useFetchCatagoriesProductsQuery(name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);
  return (
    <CategoryPageMain>
      <h1> {name.toUpperCase()}</h1>
      <h2>Total:{data?.total}</h2>
      <CategoryProductList
        data={data?.products}
        isLoading={isFetching || isLoading}
      />
      <ForYou />
      <ToTop/>
    </CategoryPageMain>
  );
}

export default CategoryPage;
