import React from "react";
import styled from "styled-components";
import Headroom from "react-headroom";
import SecondHeader from "@/components/general/secondheader/navbar";
import HistoriasGrid from "@/components/general/historias/historiasgrid";

const StoriesContainer = styled.div`
  width: 100%;
`;

export default function Stories({ dataCards }) {
  return (
    <StoriesContainer>
      <Headroom>
        <SecondHeader />
      </Headroom>
      <HistoriasGrid dataCards={dataCards} />
    </StoriesContainer>
  );
}
