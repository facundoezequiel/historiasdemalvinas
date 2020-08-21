import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0 !important;
  z-index: 99;
  backdrop-filter: saturate(180%) blur(10px);
  background-color: rgba(255, 255, 255, 0.8);

  div {
    width: 70%;
    margin: 0 auto;
  }

  hr {
    border: 0;
    border-top: 1px solid #eee;
    margin: 0;
  }

  nav {
    width: 33%;
    margin: 0 auto;
    padding-top: 1.3%;
    padding-bottom: 1.3%;
  }

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    width: 100%;
    padding-left: 0%;
    margin: 0;
  }

  li {
    display: inline;
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

  .pageButton::after {
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

  .pageButton:hover {
    color: var(--black);
    cursor: pointer !important;
  }

  .pageButton:hover:after {
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

  .pageActive {
    color: var(--orange) !important;
    cursor: default;
  }

  .pageActive:after {
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
