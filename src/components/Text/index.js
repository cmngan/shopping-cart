import styled, { css } from 'styled-components'
import { generalCss, fontCss } from '../Theme'

export const Text = styled.p`
  margin: 0;
  padding: 0;
  ${generalCss}
  ${fontCss}
  
  ${p => p.h1 && css`font-size: ${p.theme.fontSizeXL}; font-weight: bold`}
`
