import React from "react";
import { DonarCardContainer } from "./styled";
import Paragraph from "../paragraph";
import Title from "../title";

export default function DonarCard({
  price,
  mercadoPagoLink,
  comision,
  border,
}) {
  return (
    <DonarCardContainer border={border}>
      <div>
        <Paragraph text="A traves de Mercado Pago" design="donationPrice" />
        <Title level={1} texto={price} design="donationPrice" />
        <Paragraph text={comision} design="donationPrice" />
        <a mp-mode="dftl" href={mercadoPagoLink} name="MP-payButton">
          Donar
        </a>
      </div>
    </DonarCardContainer>
  );
}
