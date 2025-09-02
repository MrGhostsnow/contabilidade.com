import React, { useState } from "react"; // Importe useState
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
  ToggleWrapper,
  ToggleSwitch,
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
  <img
    src={plusIcon}
    alt="Plus mark"
    width="14px"
    height="14px"
    style={{ padding: "0 4px" }}
  />
);

const plansData = [
  {
    name: "Plano PJ",
    price: { monthly: 199, annually: 199 * 10 },
    originalPrice: { monthly: 249, annually: 249 * 12 },
    isHighlighted: true,
    description:
      "Faturamento Mensal: ideal até 50 mil*\nNotas fiscais: até 10 notas/mês",
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
    price: { monthly: 249, annually: 249 * 10 },
    originalPrice: { monthly: 299, annually: 299 * 12 },
    isHighlighted: false,
    description:
      "Faturamento Mensal: ideal até 100 mil*\nNotas fiscais: até 50 notas/mês",
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
    price: { monthly: 329, annually: 329 * 10 },
    originalPrice: { monthly: 499, annually: 499 * 12 },
    isHighlighted: false,
    description:
      "Faturamento Mensal: ideal até 100 mil*\nNotas fiscais: até 100 notas/mês",
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
  const [isAnnual, setIsAnnual] = useState(false);

  const togglePrice = () => {
    setIsAnnual(!isAnnual);
  };

  const selectedPriceKey = isAnnual ? "annually" : "monthly";

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
      {/* Adicione o seletor aqui */}
      <ToggleWrapper>
        <span>Mensal</span>
        <ToggleSwitch>
          <input type="checkbox" checked={isAnnual} onChange={togglePrice} />
          <span></span>
        </ToggleSwitch>
        <span>Anual</span>
      </ToggleWrapper>
      <CardsWrapper>
        {plansData.map((plan, index) => (
          <PlanCard key={index} highlighted={plan.isHighlighted}>
            {plan.isHighlighted && (
              <HighlightTag highlighted={plan.isHighlighted}>
                MAIS CONTRATADO
              </HighlightTag>
            )}
            <PlanTitle>{plan.name}</PlanTitle>
            <PlanPrice>
              <text>de</text>
              <span> R${plan.originalPrice[selectedPriceKey]}</span>
              <text>por a partir de </text>
              <text>R$</text>
              {plan.price[selectedPriceKey]}
              <text style={{ color: "#B8B8B8" }}>
                {isAnnual ? "/ANUAL" : "/MENSAL"}
              </text>
            </PlanPrice>
            <PlanDescription>
              {plan.description.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </PlanDescription>
            <BenefitList>
              {plan.benefits.map((benefit, i) => (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                  key={i}
                >
                  <BenefitItem
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                    key={i}
                  >
                    {benefit.icon}
                  </BenefitItem>
                  <BenefitItem>{benefit.text}</BenefitItem>
                </div>
              ))}
            </BenefitList>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
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
