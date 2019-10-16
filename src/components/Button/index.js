import styled, { css } from 'styled-components'
import { generalCss, fontCss } from '../Theme'

export const Button = styled.button`
  border: none;
  padding: 0;
  border-radius: 4px;
  background-color: transparent;
  ${generalCss}
  ${fontCss}
  ${p => p.primary && css`
    padding: 14px 0;
    background-color: ${p.theme.buttonColor};
    color: ${p.theme.white};
  `}
`
