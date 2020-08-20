import React from "react";
import { CardContainer } from "./styled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faQuoteRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../title";
import Paragraph from "../paragraph";
import Image from "../image";
import CardIcon from "../cardicon";

export default function Card({ cardImage, title, date, abstract, tag, user }) {
  return (
    <CardContainer>
      <Link to="/historia">
        <Image imageLink={cardImage} design="coverCard" />
        <Title level={3} texto={title}></Title>
        <div className="dateTagUserContainer">
          <div className="userContainer">
            <CardIcon icon={<FontAwesomeIcon icon={faUser} />}></CardIcon>
            <div>
              <Paragraph design="cardTitle" text="Escrita por"></Paragraph>
              <Paragraph design="cardText" text={user}></Paragraph>
            </div>
          </div>
          <div className="dateContainer">
            <CardIcon
              icon={<FontAwesomeIcon icon={faCalendarDay} />}
            ></CardIcon>
            <div>
              <Paragraph design="cardTitle" text="Fecha"></Paragraph>
              <Paragraph design="cardText" text={date}></Paragraph>
            </div>
          </div>
          <div className="tagContainer">
            <CardIcon icon={<FontAwesomeIcon icon={faQuoteRight} />}></CardIcon>
            <div>
              <Paragraph design="cardTitle" text="Tópico"></Paragraph>
              <Paragraph text={tag} design="cardText"></Paragraph>
            </div>
          </div>
        </div>
        <div className="abstractContainer">
          <Paragraph design="cardTitleAbstract" text="Descripción"></Paragraph>
          <Paragraph text={abstract} design="cardText"></Paragraph>
        </div>
      </Link>
    </CardContainer>
  );
}
