import React from "react";
import PropTypes from "prop-types";

import { Text } from "components/Presentation";

import { toSentence } from "utils/dataHelpers";

function RecipeDirections({ recipeDirections }) {
  return (
    <section className="w-6/12 my-16">
      <Text type="h2" className="font-serif font-bold">
        Directions
      </Text>
      <ol className="list-inside my-16 ">
        {recipeDirections.map((direction, index) => {
          return (
            <li className="my-8 flex" key={direction}>
              <Text type="p">
                <span className="mr-2">{index + 1}.</span>
                {toSentence(direction)}
              </Text>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default RecipeDirections;

RecipeDirections.propTypes = {
  recipeDirections: PropTypes.array,
};
