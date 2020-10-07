import styled from "styled-components";
import { breakpoints } from "@/constants/media";

const CardContainer = styled.div`
  width: 20%;
  margin: 0% 1.4% 4% 1.4%;
  transition: 0.2s;
  background-color: var(--white);
  border-radius: 7px 7px 7px 7px;
  -moz-border-radius: 7px 7px 7px 7px;
  -webkit-border-radius: 7px 7px 7px 7px;
  border: 0px solid #000000;
  cursor: pointer;
  height: 480px;
  /* Responsive */
  @media (max-width: ${"1892px"}) {
    width: 19.9%;
  }
  @media (max-width: ${"1809px"}) {
    width: 20.6%;
    margin: 0% 1% 4% 1%;
  }
  @media (max-width: ${"1734px"}) {
    width: 21.4%;
    margin: 0% 0.5% 4% 0.5%;
  }  
  @media (max-width: ${"1600px"}) {
    width: 21.7%;
    margin: 0% 0.2% 4% 0.2%;
  }


  :hover {
    transform: scale(1.03);
  }

  img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: 0.2s all;
  }

  :hover img {
    -webkit-filter: grayscale(0%) !important;
    filter: grayscale(0%) !important;
    border: 1px;
  }

  * {
    text-decoration: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  a {
    width: 100%;
  }

  h3 {
    width: 88%;
    margin: 0%;
    margin: 0 auto;
    color: var(--black);
    line-height: 28px;
    font-size: 0.95em;
    margin-top: 6%;
    margin-bottom: 5%;
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .dateTagUserContainer {
    width: 88%;
    margin: 0%;
    margin: 0 auto;
  }

  .tagContainer,
  .dateContainer,
  .userContainer {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin: 5% 0% 0% 0%;
    align-items: center;
  }

  .abstractContainer {
    width: 88%;
    margin: 0 auto;
  }

  .abstractContainer p {
    margin-top: 5%;
  }
`;

export { CardContainer };
