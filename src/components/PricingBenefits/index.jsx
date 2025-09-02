import React from "react";
import {
  PricingContainer,
  Title,
  Highlight,
  Table,
  TableHeader,
  TableRow,
  Cell,
  Included,
  SavingsBox,
} from "./styled";
import Button from "../Button/index";
import Logo from "../../assets/logo.png";
import Coin from "../../assets/coin.png";

const pricingData = [
  { benefit: "Certificado Digital", marketPrice: "R$ 200/ano" },
  { benefit: "Abertura de empresa, 100% digital", marketPrice: "R$ 700/ano" },
  { benefit: "Contabilidade Consultiva", marketPrice: "R$ 5.880,00/mês" },
  {
    benefit: "Conta PJ gratuita, digital e integrada à sua contabilidade",
    marketPrice: "R$ 756,00/ano",
  },
  {
    benefit:
      "Atendimento personalizado por telefone e WhatsApp a partir do plano de entrada",
    marketPrice: "R$ 1.920/ano",
  },
];

const PricingBenefits = () => {
  return (
    <PricingContainer>
      <Title>
        Por que a <Highlight>Contabilidade.com</Highlight> é a melhor opção{" "}
        {"{cidade}"}?
      </Title>
      <Table>
        <TableHeader>
          <Cell
            style={{ alignSelf: "center", color: "#1FB841", fontSize: "22px" }}
          >
            Benefícios inclusos no seu pacote
          </Cell>
          <img
            src={Logo}
            alt="Contabilidade.com"
            style={{ justifySelf: "center", width: "32px", height: "40px" }}
          />
          <Cell
            style={{
              alignSelf: "center",
              color: "#232425",
              fontSize: "22px",
              fontWeight: "400",
            }}
          >
            Média de Mercado
          </Cell>
        </TableHeader>
        {pricingData.map((item, index) => (
          <TableRow key={index}>
            <Cell>{item.benefit}</Cell>
            <Cell>
              <Included>incluso</Included>
            </Cell>
            <Cell>{item.marketPrice}</Cell>
          </TableRow>
        ))}
      </Table>
      <SavingsBox>
        <img src={Coin} alt="coin icon" />
        Uma economia média de
        <Highlight style={{ fontSize: "30px" }}>R$ 9.456/ano</Highlight>
      </SavingsBox>
      <Button style={{ marginTop: "2rem" }}>Abrir empresa grátis</Button>
    </PricingContainer>
  );
};

export default PricingBenefits;
