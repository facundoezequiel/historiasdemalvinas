import React from "react";
import { DonarPricesContainer } from "./styled";
import DonarCard from "../../../uikit/donarcard";

export default function HomeDonarPrices() {
  return (
    <DonarPricesContainer>
      <div className="pricesContainer">
        {/* Pago por comisión $1,75 + IVA */}
        <DonarCard
          border="active"
          comision="Comisión $1,75 + IVA incluidos"
          price={["$50", <span> ARS</span>]}
          mercadoPagoLink="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=321936573-4bf939d8-4fcb-4a2f-8689-b3dbbc468d5c"
        />
        {/* Pago por comisión $5,24 + IVA */}
        <DonarCard
          border="active"
          comision="Comisión $5,24 + IVA incluidos"
          price={["$150", <span> ARS</span>]}
          mercadoPagoLink="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=321936573-fcc1a2d9-9ad0-4e2f-aee6-dfe30bfc9a93"
        />
        {/* Pago por comisión $10,47 + IVA */}
        <DonarCard
          border="active"
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
    </DonarPricesContainer>
  );
}
