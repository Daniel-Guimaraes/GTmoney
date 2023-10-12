import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media (max-width: 480px) {
    overflow: auto;
  }
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${props => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;
  transition: transform 0.2s;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  &:hover {
    transform: scale(1.05); 
  }

  ${props => props.variant === 'green' && css`
    background-color: ${props => props.theme["green-700"]};
  `}

  @media (max-width: 480px) {
    padding: 1.5rem;
    width: 280px;
    transform: none !important;

    strong {
      font-size: 1.5rem;
    }
  }
`

export const LastTransactionDate = styled.span`
  display: none;

  @media (max-width: 480px) {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: ${props => props.theme['gray-500']}; 
  }
`