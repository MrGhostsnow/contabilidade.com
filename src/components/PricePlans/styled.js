import styled from "styled-components";

export const PlansContainer = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  text-align: center;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const PlansTitle = styled.h2`
  font-size: 34px;
  font-weight: 500;
  margin-bottom: 3rem;
  width: 504px;
`;

export const VideoPrompt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  font-size: 1rem;
  font-weight: 600;
`;

export const VideoButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PlayButton = styled.div`
  display: flex;
  border-radius: 50%;
  width: 67px;
  height: 67px;
  background: #ebe6d7;
  align-items: center;
  justify-content: center;
  position: relative;
  left: -24px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PlanCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 12px;
  padding: 2rem;
  //text-align: left;
  box-shadow: ${({ theme }) => theme.boxShadow};
  position: relative;
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  flex-direction: column;

  ${(props) =>
    props.highlighted &&
    `
    border-color: #2BBE41;
    border-width: 2px; 
  `}
`;

export const HighlightTag = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2bbe41;
  color: #fff;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;

  // Estilos para a borda arredondada na parte superior do card destacado
  ${(props) =>
    props.highlighted &&
    `
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    transform: none;
    border-radius: 12px 12px 0 0;
    padding: 1rem 0;
    text-align: center;
    font-size: 1rem;
  `}
`;

export const PlanTitle = styled.h3`
  font-size: 34px;
`;

export const PlanPrice = styled.div`
  font-size: 42px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 1rem;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.red};
    text-decoration: line-through;
    margin-right: 0.4rem;
  }

  text {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
    margin-right: 0.3rem;
  }
`;

export const PlanDescription = styled.p`
  font-size: 0.9rem;
  color: #4c5157;
  line-height: 2;
  margin-bottom: 2rem;
`;

export const BenefitList = styled.ul`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0.75rem;
  gap: 12px;
`;
