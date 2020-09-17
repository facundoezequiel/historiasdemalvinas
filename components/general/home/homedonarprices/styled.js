import styled from "styled-components";

const DonarContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  background-color: var(--gray2);
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);

  .titleTextContainer {
    width: 70%;
    margin: 0 auto;
    padding: 2% 0% 0% 0%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }

  .titleTextContainer h1 {
    width: 30%;
  }

  .titleTextContainer p {
    width: 60%;
    text-align: right;
  }

  .pricesContainer {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export { DonarContainer };
