import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import RecipeResultsWrapper from "components/RecipeResultsWrapper/RecipeResultsWrapper";

import searchParamsAtom from "recoil/searchParams";

import { Text } from "components/Presentation";

function PopularRecipes() {
  const [searchParams, setSearchParams] = useRecoilState(searchParamsAtom);

  // Change this later to load popular recipes
  useEffect(() => {
    setSearchParams(["morel"]);
  }, [setSearchParams]);

  return (
    <section>
      <Text type="h2" className="my-12">
        Popular
      </Text>
      <RecipeResultsWrapper />
    </section>
  );
}

export default PopularRecipes;
