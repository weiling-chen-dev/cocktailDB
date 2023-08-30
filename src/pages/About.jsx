import styled from "styled-components";

const About = () => {
  return (
    <Section>
      <h3>About Us</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illum ipsam
        nostrum est illo unde aliquid consequatur nisi dolorum autem. Labore,
        suscipit dicta similique fugit amet perspiciatis vel. Nam, dolores! Id
        illum ipsam nostrum est illo unde aliquid consequatur nisi dolorum
        autem.
      </p>
    </Section>
  );
};

const Section = styled.section`
  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
`;
export default About;
