import styled from "styled-components";

const DonarPricesContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  background-color: var(--gray2);
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);

  .pricesContainer {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export { DonarPricesContainer };
