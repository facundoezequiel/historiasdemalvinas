import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0 !important;
  z-index: 99;
  backdrop-filter: saturate(180%) blur(10px);
  background-color: rgba(255, 255, 255, 0.9);

  div {
    width: 70%;
    margin: 0 auto;
  }

  hr {
    border: 0;
    border-top: 1px solid #eee;
    margin: 0;
  }

  .navBar {
    width: 34%;
    margin: 0 auto;
    display: flex;
    padding-top: 1.3%;
    padding-bottom: 1.3%;
  }

  .navBar a {
    margin-right: 6%;
  }

  a {
    text-decoration: none;
    color: var(--black);
    font-size: 0.77em;
    font-family: var(--poppins);
    font-weight: 400;
    transition: 0.2s ease 0s;
    position: relative;
  }

  .navBar a::after {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 3px;
    background-color: var(--black);
    content: "";
    opacity: 0;
    transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
    transform: translateY(19.5px);
    cursor: default;
  }

  .navBar a:hover {
    color: var(--black);
    cursor: pointer !important;
  }

  .navBar a:hover:after {
    opacity: 1;
    transform: translateY(19.5px);
    background-color: var(--black);
  }

  .navprofileDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .profileLink {
    width: 10%;
    text-align: right;
  }

  .profileLink p {
    transition: 0.2s ease 0s;
  }

  .navBar > .active {
    color: var(--orange) !important;
    cursor: default;
  }

  .navBar > .active:after {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 3px;
    background-color: var(--orange) !important;
    content: "";
    opacity: 1;
    transform: translateY(19.5px);
    cursor: default;
  }

  .profileLink:hover p {
    color: var(--orange) !important;
  }
`;

export { HeaderContainer };
