import React from "react";
import {
  PlansContainer,
  Highlight,
  PlansTitle,
  VideoPrompt,
  VideoButtonWrap,
  PlayButton,
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
import plusIcon from "../../assets/plus.png";
import Picture from "../../assets/picture.png";
import Play from "../../assets/play.png";

const checkMark = (
  <img src={checkIcon} alt="Check mark" width="19px" height="19px" />
);

const plusMark = (
  <img src={plusIcon} alt="Plus mark" width="10px" height="10px" />
);

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
      { text: "Tudo que contém o Plano PJ", icon: checkMark },
      { text: "Entrega do IRPF de 1 sócio(a)", icon: plusMark },
      { text: "Relatórios contábeis mensais", icon: plusMark },
      { text: "Multibenefícios", icon: plusMark },
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
      { text: "Tudo que contém o Plano PJ e Plus", icon: checkMark },
      { text: "Gestão financeira completa", icon: plusMark },
      { text: "Pró-labore até 2 sócios(as) grátis", icon: plusMark },
      { text: "Pagamentos de contas", icon: plusMark },
      { text: "Distribuição de lucros", icon: plusMark },
    ],
    buttonText: "Comece grátis",
  },
];

const PricePlans = () => {
  return (
    <PlansContainer>
      <PlansTitle>
        Escolha o <Highlight>plano contábil</Highlight> ideal para sua empresa
      </PlansTitle>
      <VideoPrompt>
        <VideoButtonWrap>
          <img src={Picture} alt="Video thumbnail" width="98px" height="98px" />
          <PlayButton>
            <img src={Play} alt="Play" width="24px" height="24px" />
          </PlayButton>
        </VideoButtonWrap>
        Entenda os planos
      </VideoPrompt>
      <CardsWrapper>
        {plansData.map((plan, index) => (
          <PlanCard key={index} highlighted={plan.isHighlighted}>
            {plan.isHighlighted && <HighlightTag>MAIS CONTRATADO</HighlightTag>}
            <PlanTitle>{plan.name}</PlanTitle>
            <PlanPrice>
              <text>de</text>
              <span> R${plan.originalPrice}</span>
              <text>por a partir de </text>
              <text>R$</text>
              {plan.price}
              <text style={{ color: "#B8B8B8" }}>/MENSAL</text>
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
            <div
              style={{
                alignItems: "flex-end",
                justifyContent: "center",
                display: "flex",
                height: "100%",
              }}
            >
              <Button variant={plan.isHighlighted ? "primary" : "secondary"}>
                {plan.buttonText}
              </Button>
            </div>
          </PlanCard>
        ))}
      </CardsWrapper>
    </PlansContainer>
  );
};

export default PricePlans;
