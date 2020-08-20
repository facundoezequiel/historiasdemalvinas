import styled, { css } from "styled-components";

const InputIconContainer = styled.div`
  margin: 0 0 0 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  /* Home search */
  ${(props) =>
    props.design === "searchHome" &&
    css`
      width: 73%;
      margin-top: 5% !important;
      margin-left: 0% !important;
    `}
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4%;
  padding: 4.2% 5% 4.2% 5%;
  border-radius: 8px 0px 0px 8px;
  -moz-border-radius: 8px 0px 0px 8px;
  -webkit-border-radius: 8px 0px 0px 8px;
  background-color: #d8dfe1;
  color: #818689;
  margin: 8% 0% 0% 0%;
  font-size: 1.1em;

  /* Home search */
  ${(props) =>
    props.design === "searchHome" &&
    css`
      margin-top: 0% !important;
      padding: 3.3% 4% 3.3% 4%;
    `}
`;

const InputContainer = styled.input`
  width: 82%;
  padding: 4.2% 4% 4.2% 0% !important;
  border: 0 !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  outline: none !important;
  background-color: var(--inputgray);
  margin: 8% 0% 0% 0%;
  border-radius: 0px 8px 8px 0px;
  -moz-border-radius: 0px 8px 8px 0px;
  -webkit-border-radius: 0px 8px 8px 0px;
  font-family: var(--proximasoft);
  font-size: 0.9em;
  color: var(--inputgrayfont);

  ::placeholder {
    color: var(--inputgrayfont);
  }

  :valid {
    color: var(--inputgrayfont);

    /* Home search */
    ${(props) =>
      props.design === "searchHome" &&
      css`
        width: 84%;
        margin-top: 0% !important;
        padding: 2.8% 4% 2.8% 0% !important;
      `}
  }
`;

export { IconContainer, InputContainer, InputIconContainer };
