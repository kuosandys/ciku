/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import PropTypes from 'prop-types';

// States
import { userShoppingList } from 'recoil/user';

// Components
import RecipeIngredientsActions from 'pages/RecipePage/RecipeIngredientsActions';
import { Text, Heading, Checkbox, ListItem2 } from 'components/atoms';

const RecipeIngredients = ({ recipeIngredients }) => {
  const [shoppingList, setShoppingList] = useRecoilState(userShoppingList);
  const [localCount, setLocalCount] = useState(0);
  const [localList, setLocalList] = useState([]);
  const ingredientsListRef = useRef(null);

  const handleClick = ingredientName => {
    if (localCount === 0) {
      setLocalList(prevState => {
        if (prevState.includes(ingredientName)) {
          return prevState.filter(item => item !== ingredientName);
        }
        return [...prevState, ingredientName];
      });
    } else {
      setShoppingList(prevState => {
        if (prevState.includes(ingredientName)) {
          setLocalCount(prev => prev - 1);
          return prevState.filter(item => item !== ingredientName);
        }
        setLocalCount(prev => prev + 1);

        return [...prevState, ingredientName];
      });
    }
  };

  const inShoppingList = ingredient => {
    if (shoppingList.includes(ingredient) || localList.includes(ingredient)) {
      return true;
    }
    return false;
  };

  const handleAddToList = () => {
    setShoppingList(prevState => [...prevState, ...localList]);
    setLocalList([]);
    setLocalCount(localList.length);
  };

  useEffect(() => {
    const ingredientsList = ingredientsListRef.current;
    if (ingredientsList) {
      const checked = ingredientsList.querySelectorAll(
        'input[type=checkbox]:checked'
      );
      setLocalCount(checked.length);
    }
  }, []);

  return (
    <section className="w-1/2 pr-24">
      <Heading type="h3">Ingredients</Heading>
      <ul className="space-y-2 my-8 -ml-4" ref={ingredientsListRef}>
        {recipeIngredients.map(ingredient => (
          <ListItem2 key={ingredient}>
            <Checkbox
              value={ingredient}
              checked={inShoppingList(ingredient)}
              onClick={() => handleClick(ingredient)}
            />
            <Text type="md">{ingredient}</Text>
          </ListItem2>
        ))}
      </ul>
      <RecipeIngredientsActions
        localCount={localCount}
        handleAddToList={handleAddToList}
      />
    </section>
  );
};

export default RecipeIngredients;

RecipeIngredients.propTypes = {
  recipeIngredients: PropTypes.array.isRequired
};
