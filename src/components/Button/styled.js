import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 280px;
  height: 60px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  ${(props) =>
    props.variant === "secondary" &&
    `
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: ${({ theme }) =>
        theme.colors.primary}1A; /* Adiciona transparência */
    }
  `}
`;
