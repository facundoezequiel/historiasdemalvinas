import styled from "styled-components";

const HomePlanetContainer = styled.section`
  width: 100%;
  background-color: var(--gray2);
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);

  .warInfoContainer {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .warInfoContainer div {
    width: 49%;
    display: flex;
    justify-content: flex-end;
  }

  .reinoUnidoDiv {
    justify-content: flex-start !important;
  }
`;

export { HomePlanetContainer };
