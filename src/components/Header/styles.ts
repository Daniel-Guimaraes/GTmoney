import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;

  @media (max-width: 480px) {
    img {
      width: 117px;
      height: 25px;
    }
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme["white"]};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme["green-700"]};  
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 0 1rem;
    height: 38px;
  }
`