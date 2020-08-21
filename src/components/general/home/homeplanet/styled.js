import styled from "styled-components";

const HomePlanetContainer = styled.section`
  width: 100%;
  padding: 1% 0% 1% 0%;
  background-color: var(--gray2);
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);

  .warInfoContainer {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .warInfoContainer section {
    width: 45%;
    padding: 0% 2% 0% 0%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .vl {
    border-left: 2px solid var(--gray);
    height: 90px;
  }

  .reinoUnidoDiv {
    justify-content: flex-start !important;
    padding: 0% 0% 0% 2% !important;
  }

  section div {
    padding: 0% 3% 0% 3%;
  }

  section div h4,
  section div p {
    width: 100%;
    text-align: center;
  }
`;

export { HomePlanetContainer };
