import React from "react";
import { DonarCardContainer } from "./styled";
import Paragraph from "../paragraph";
import Title from "../title";

export default function DonarCard({ price, mercadoPagoLink, comision }) {
  return (
    <DonarCardContainer>
      <div>
        <Paragraph
          text="A traves de Mercado Pago"
          design="donationPrice"
          size="0.9"
        />
        <Title level={1} texto={price} design="donationPrice" />
        <Paragraph text={comision} design="donationPrice" size="0.9" />
        <a mp-mode="dftl" href={mercadoPagoLink} name="MP-payButton">
          Donar
        </a>
      </div>
    </DonarCardContainer>
  );
}
