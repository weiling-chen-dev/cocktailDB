import styled from "styled-components";
import Cocktail from "./Cocktail";

const Cocktails = ({ drinks }) => {
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>No matching results</h4>;
  }

  return (
    <Section>
      {drinks.map((drink) => {
        return <Cocktail key={drink.idDrink} {...drink} />;
      })}
    </Section>
  );
};

const Section = styled.section`
  display: grid;
  gap: 2rem;
  @media (min-width: 774px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1143px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export default Cocktails;
