import { Link } from "react-router-dom";
import styled from "styled-components";

const Cocktail = ({
  strDrink,
  strDrinkThumb,
  strGlass,
  strAlcoholic,
  idDrink,
}) => {
  return (
    <Article>
      <div className="img-container">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="footer">
        <h3>{strDrink}</h3>

        <p>
          {strAlcoholic}
          <small>{strGlass}</small>
        </p>

        <Link to={`cocktail/${idDrink}`} className="btn">
          Details
        </Link>
      </div>
    </Article>
  );
};

const Article = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
  :hover {
    box-shadow: var(--shadow-4);
  }
  img {
    height: 15rem;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }
  .footer {
    padding: 1.5rem;
    h3 {
      font-weight: 500;
      margin-bottom: 0.75rem;
    }
    p {
      margin-bottom: 1rem;
    }

    small {
      margin-top: 0.5rem;
      display: block;
      color: var(--grey-400);
    }
  }
`;
export default Cocktail;
