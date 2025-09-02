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
    color: #3876FD;
    border: 1px solid #3876FD;

    &:hover {
      background-color: #E6F0FF;
    }
  `}
`;
