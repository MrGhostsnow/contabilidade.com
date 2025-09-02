import React from "react";
import {
  PlansContainer,
  PlansTitle,
  PlansSubtitle,
  VideoPrompt,
  CardsWrapper,
  PlanCard,
  HighlightTag,
  PlanTitle,
  PlanPrice,
  PlanDescription,
  BenefitList,
  BenefitItem,
} from "./styled";
import Button from "../Button/index";
import checkIcon from "../../assets/check.png";

const checkMark = <img src={checkIcon} alt="Check mark" />;

const plansData = [
  {
    name: "Plano PJ",
    price: 199,
    originalPrice: 249,
    isHighlighted: true,
    description:
      "Faturamento Mensal: ideal até 50 mil* Notas fiscais: até 10 notas/mês",
    benefits: [
      { text: "Abertura Gratuita", icon: checkMark },
      { text: "Certificado digital e-CNPJ", icon: checkMark },
      { text: "Plataforma com emissor e gestão financeira", icon: checkMark },
      {
        text: "Contabilidade, pró-labore e entrega de as obrigações com o governo",
        icon: checkMark,
      },
      {
        text: "Atendimento whatsapp, e-mail, telefone e vídeo",
        icon: checkMark,
      },
    ],
    buttonText: "Comece grátis",
  },
  {
    name: "Plano PJ Plus",
    price: 249,
    originalPrice: 299,
    isHighlighted: false,
    description:
      "Faturamento Mensal: ideal até 100 mil* Notas fiscais: até 50 notas/mês",
    benefits: [
      { text: "Tudo que contém o Plano PJ", icon: "+" },
      { text: "Entrega do IRPF de 1 sócio(a)", icon: "+" },
      { text: "Relatórios contábeis mensais", icon: "+" },
      { text: "Multibenefícios", icon: "+" },
    ],
    buttonText: "Comece grátis",
  },
  {
    name: "Plano PJ VIP",
    price: 329,
    originalPrice: 499,
    isHighlighted: false,
    description:
      "Faturamento Mensal: ideal até 100 mil* Notas fiscais: até 100 notas/mês",
    benefits: [
      { text: "Tudo que contém o Plano PJ e Plus", icon: "+" },
      { text: "Gestão financeira completa", icon: "+" },
      { text: "Pró-labore até 2 sócios(as) grátis", icon: "+" },
      { text: "Pagamentos de contas", icon: "+" },
      { text: "Distribuição de lucros", icon: "+" },
    ],
    buttonText: "Comece grátis",
  },
];

const PricePlans = () => {
  return (
    <PlansContainer>
      <PlansTitle>Escolha o plano contábil ideal</PlansTitle>
      <PlansSubtitle>para sua empresa</PlansSubtitle>
      <VideoPrompt>
        <img src="https://via.placeholder.com/50" alt="Video thumbnail" />
        Entenda os planos
      </VideoPrompt>
      <CardsWrapper>
        {plansData.map((plan, index) => (
          <PlanCard key={index} highlighted={plan.isHighlighted}>
            {plan.isHighlighted && <HighlightTag>MAIS CONTRATADO</HighlightTag>}
            <PlanTitle>{plan.name}</PlanTitle>
            <PlanPrice>
              <span>de R${plan.originalPrice}</span>R${plan.price}
              <span style={{ fontSize: "1rem" }}>/mensal</span>
            </PlanPrice>
            <PlanDescription>{plan.description}</PlanDescription>
            <BenefitList>
              {plan.benefits.map((benefit, i) => (
                <BenefitItem key={i}>
                  {benefit.icon}
                  {benefit.text}
                </BenefitItem>
              ))}
            </BenefitList>
            <Button variant={plan.isHighlighted ? "primary" : "secondary"}>
              {plan.buttonText}
            </Button>
          </PlanCard>
        ))}
      </CardsWrapper>
    </PlansContainer>
  );
};

export default PricePlans;
