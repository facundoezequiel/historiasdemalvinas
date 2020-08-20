import styled from "styled-components";

const HomeGridContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: var(--greenlight);

  section {
    width: 72%;
    margin: 0 auto;
    padding-top: 4%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 40px;
    row-gap: 1em;
    display: flex;
    flex-wrap: wrap;
    background-color: var(--greenlight);
  }

  .titleButtonsContainer {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-bottom: 4%;
  }

  .titleButtonsContainer div {
    display: flex;
    width: 30%;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    margin-right: 1.3%;
  }

  h3 {
    margin-left: 2%;
    color: var(--black);
    margin: 0;
    width: 40%;
    margin-left: 1.3%;
  }
`;

export { HomeGridContainer };
