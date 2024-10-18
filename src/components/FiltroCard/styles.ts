import styled from 'styled-components'

type Props = {
  $ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.$ativo ? '#1E90FF' : '#a1a1a1')};
  background-color: #fcfcfc;
  border-radius: 8px;
  color: ${(props) => (props.$ativo ? '#1E90FF' : '#5e5e5e')};
  display: block;
  cursor: pointer;
`

export const Contador = styled.span`
  font-size: 24px;
  font-weight: 700;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
  font-weight: 400;
`
