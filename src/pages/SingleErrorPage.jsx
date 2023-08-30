import { Navigate, useRouteError } from "react-router-dom";
import styled from "styled-components";

const SingleErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  // console.log(error.response.status);
  // console.log(error.response.data.msg);
  // if (error.response.status === 400) {
  //   console.log(error.response.status);
  //   return (
  //     <Section>
  //       <h3>Hey</h3>
  //       <p>{error.response.data.msg}</p>
  //       <Navigate to="/newsletter" />
  //     </Section>
  //   );
  // }

  return (
    <Section>
      <h3>Oops...</h3>
      <p>Something went wrong.</p>
      <p>Please try later</p>
    </Section>
  );
};

const Section = styled.section`
  h3 {
    margin-bottom: 1rem;
    color: var(--grey-600);
    font-weight: 700;
  }
  p {
    line-height: 1.15;
  }
`;
export default SingleErrorPage;
