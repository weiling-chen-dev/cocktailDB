import { Form, useNavigation } from "react-router-dom";
import styled from "styled-components";

const SearchBar = ({ searchTerm }) => {
  const navigation = useNavigation();
  return (
    <Section>
      <Form method="get">
        <input
          type="search"
          name="searchTerm"
          id="searchTerm"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn">
          {navigation.state === "submitting" ? "searching" : "search"}
        </button>
      </Form>
    </Section>
  );
};

const Section = styled.section`
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto 5rem auto;
  box-shadow: var(--shadow-2);
  border-radius: var(--borderRadius);
  max-width: 40rem;
  form {
    display: grid;
    grid-template-columns: 1fr auto;
    width: 85%;
    height: 6rem;
    align-items: center;
  }

  input {
    width: 100%;
    padding: 0rem 0.75rem;
    box-sizing: border-box;
    border: solid 1px var(--grey-200);
    border-top-right-radius: 0;
    border-top-left-radius: var(--borderRadius);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: var(--borderRadius);
    height: 1.7rem;
    background-color: var(--grey-100);
  }
  .btn {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    height: 1.7rem;
  }
`;
export default SearchBar;
