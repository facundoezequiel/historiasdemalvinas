import React from "react";
import { CardContainer } from "./styled";
import Link from "next/link";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faQuoteRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Title from "@/components/uikit/title";
import Paragraph from "@/components/uikit/paragraph";
import Image from "@/components/uikit/image";
import CardIcon from "@/components/uikit/cardicon";

export default function Card({ cardImage, title, date, abstract, tag, user }) {
  return (
    <CardContainer>
      <Link href="/historia">
        <a>
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
              <CardIcon
                icon={<FontAwesomeIcon icon={faQuoteRight} />}
              ></CardIcon>
              <div>
                <Paragraph design="cardTitle" text="Tópico"></Paragraph>
                <Paragraph text={tag} design="cardText"></Paragraph>
              </div>
            </div>
          </div>
          <div className="abstractContainer">
            <Paragraph
              design="cardTitleAbstract"
              text="Descripción"
            ></Paragraph>
            <Paragraph text={abstract} design="cardText"></Paragraph>
          </div>
        </a>
      </Link>
    </CardContainer>
  );
}
