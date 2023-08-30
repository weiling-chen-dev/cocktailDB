import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Link, Navigate, useLoaderData } from "react-router-dom";
import styled from "styled-components";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const fetchCocktailQuery = (id) => {
  return {
    queryKey: ["cocktailId", id],
    queryFn: async () => {
      try {
        const res = await axios.get(`${url}${id}`);
        return res.data.drinks;
      } catch (error) {
        throw new Error(error);
      }
    },
  };
};

export const cocktailLoader =
  (queryClient) =>
  async ({ params: { id } }) => {
    await queryClient.ensureQueryData(fetchCocktailQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data: drink } = useQuery(fetchCocktailQuery(id));

  if (!drink) {
    return <Navigate to="/" replace={true} />;
  }

  let ingredients = [];
  for (let i = 1; i < 16; i++) {
    if (drink[0][`strIngredient${i}`]) {
      ingredients.push(drink[0][`strIngredient${i}`]);
    }
  }
  const ingredientsString = ingredients.toString().replaceAll(",", ", ");

  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
  } = drink[0];

  return (
    <Section>
      <div className="info-container">
        <div>
          <h3>{strDrink}</h3>
          <img src={strDrinkThumb} alt={strDrink} />
        </div>
        <article>
          <p>
            <span>Name</span>
            {strDrink}
          </p>
          <p>
            <span>Category</span>
            {strCategory}
          </p>
          <p>
            <span>Info</span>
            {strAlcoholic}
          </p>
          <p>
            <span>Glass</span>
            {strGlass}
          </p>
          <p>
            <span>Ingredients</span>
            {ingredientsString}
          </p>
          <p>
            <span>Instructions</span>
            {strInstructions}
          </p>
        </article>
      </div>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </Section>
  );
};

const Section = styled.section`
  h3 {
    color: white;
    margin: 0rem 0 0rem 0;
    padding: 1rem;
    text-align: center;
    background-color: var(--primary-400);
    letter-spacing: 0.25rem;
    font-weight: 600;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }
  img {
    width: 100%;
    margin-bottom: 2rem;
    border-bottom-right-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
  }
  p {
    margin-bottom: 1.5rem;
    line-height: 1.5rem;
    text-transform: capitalize;
    span {
      text-transform: uppercase;
      letter-spacing: 0.15rem;
      color: white;
      background-color: var(--grey-400);
      font-weight: 400;
      border-radius: var(--borderRadius);
      padding: 0.25rem 0.75rem;
      margin-right: 0.5rem;
    }
  }
  .btn {
    display: block;
    text-align: center;
  }
  @media (min-width: 774px) {
    .info-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
    article {
      align-self: end;
    }
    .btn {
      display: inline;
    }
  }
`;
export default Cocktail;
