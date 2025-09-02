import styled from "styled-components";

export const PlansContainer = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  text-align: center;
  padding: 0 1rem;
`;

export const PlansTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const PlansSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

export const VideoPrompt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
  }
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
  text-align: left;
  box-shadow: ${({ theme }) => theme.boxShadow};
  position: relative;
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  ${(props) =>
    props.highlighted &&
    `
    background-color: ${({ theme }) => theme.colors.cardBackgroundHighlighted};
    border-color: ${({ theme }) => theme.colors.secondary};
  `}
`;

export const HighlightTag = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
`;

export const PlanTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const PlanPrice = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textLight};
    text-decoration: line-through;
    margin-right: 0.5rem;
  }
`;

export const PlanDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 2rem;
`;

export const BenefitList = styled.ul`
  margin-bottom: 2rem;
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;

  img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;
