import React from "react";
import { DonarContainer } from "./styled";
import DonarCard from "@/components/uikit/donarcard";
import Title from "@/components/uikit/title";
import Paragraph from "@/components/uikit/paragraph";

export default function HomeDonar() {
  return (
    <DonarContainer name="donar">
      <div className="titleTextContainer">
        <Title level={3} texto="Donaciones" />
        <Paragraph
          size="0.9"
          text="Al ser un respositorio gratuito, hay costos que no pueden mantenerse sin la ayuda de la comunidad."
        />
      </div>
      <div className="pricesContainer">
        {/* Pago por comisión $1,75 + IVA */}
        <DonarCard
          comision="Comisión $1,75 + IVA incluidos"
          price={["$100", <span> ARS</span>]}
          mercadoPagoLink="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=321936573-4bf939d8-4fcb-4a2f-8689-b3dbbc468d5c"
        />
        {/* Pago por comisión $5,24 + IVA */}
        <DonarCard
          comision="Comisión $5,24 + IVA incluidos"
          price={["$200", <span> ARS</span>]}
          mercadoPagoLink="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=321936573-fcc1a2d9-9ad0-4e2f-aee6-dfe30bfc9a93"
        />
        {/* Pago por comisión $10,47 + IVA */}
        <DonarCard
          comision="Comisión $10,47 + IVA incluidos"
          price={["$300", <span> ARS</span>]}
          mercadoPagoLink="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=321936573-bbedf010-7389-4b49-9f09-4a3b11e289e6"
        />
        {/* Pago por comisión $17,45 + IVA */}
        <DonarCard
          comision="Comisión $17,45 + IVA incluidos"
          price={["$500", <span> ARS</span>]}
          mercadoPagoLink="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=321936573-cad3fbda-563c-47a6-8a27-ac810d9fd6d9"
        />
      </div>
    </DonarContainer>
  );
}
