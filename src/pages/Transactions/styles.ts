import styled from "styled-components";

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  svg {
    display: none;
  }

  td {
    padding: 1.25rem 2rem;
    background-color: ${props => props.theme["gray-700"]};

    &:first-child {
      border-radius: 6px 0 0 6px;
    }

    &:last-child {
      border-radius: 0 6px 6px 0;
    }
  }

  @media (max-width: 480px) {
    border-spacing: 0 1rem;

    svg {
      display: initial;
    }

    tr {
      td:nth-child(1) {
        display: block;
        width: 100%;
        border-radius: 6px 6px 0 0;
        padding: 1.25rem 2rem 0;
      }

      td:nth-child(2) {
        display: block;
        width: 100%;
      }

      td:nth-child(3) {
        display: inline-block;
        width: 50%;
        border-radius: 0 0 0 6px;
        padding: 0 1rem 1.25rem 2rem;
        color: ${props => props.theme["gray-500"]};

        span {
          display: flex;
          align-items: center;
          gap: 6px;
        }
      }

      td:nth-child(4) {
        display: inline-block;
        width: 50%;
        border-radius: 0 0 6px 0;
        padding: 0 1rem 1.25rem;
        color: ${props => props.theme["gray-500"]};

        span {
          display: flex;
          align-items: center;
          gap: 6px;
        }
      }
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${props => props.variant === 'income' 
      ? props.theme["green-300"] 
      : props.theme["red-300"]  
  };

  @media (max-width: 480px) {
    font-weight: bold;
    font-size: 1.25rem;
  }
`