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

  @media (max-width: 524px) {
    width: 350px;
    font-size: 26px;
  }
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
  border-radius: 32px;
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

  @media (max-width: 524px) {
    width: 270px;
  }
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
  white-space: pre-line;
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

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};

  span {
    margin: 0 1rem;
    font-weight: 600;
  }
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 95px;
  height: 34px;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  input:checked + span:before {
    transform: translateX(26px);
  }
`;
