import styled from "styled-components";

export const PricingContainer = styled.div`
  max-width: 900px;
  margin: 4rem auto;
  text-align: center;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  width: 610px;

  @media (max-width: 524px) {
    width: 350px;
    font-size: 2rem;
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Table = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 524px) {
    padding: 1rem;
  }

  @media (max-width: 375px) {
    padding: 0rem;
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  font-weight: 600;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  align-items: center;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

export const Cell = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  padding: 0.5rem 0;

  &:first-child {
    text-align: left;
    font-weight: 500;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.black};

    @media (max-width: 524px) {
      font-size: 16px;
    }
  }

  @media (max-width: 524px) {
    font-size: 15px;
  }
`;

export const Included = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SavingsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  gap: 0.5rem;
`;
