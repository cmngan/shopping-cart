import styled, { css } from 'styled-components'
import { generalCss } from '../Theme'

export const Text = styled.p`
  margin: 0px;
  padding: 4px;
  ${generalCss}
  font-family: ${p => p.theme.fontFamily};

  font-size: ${p => p.theme.fontSizeM};
  ${p => p.XS && css`font-size: ${p.theme.fontSizeXS}`}
  ${p => p.S && css`font-size: ${p.theme.fontSizeS}`}
  ${p => p.L && css`font-size: ${p.theme.fontSizeL}`}
  ${p => p.XL && css`font-size: ${p.theme.fontSizeXL}`}
  
  ${p => p.bold && css`font-weight: bold;`}
  ${p => p.underline && css`text-decoration: underline;`}
  ${p => p.underlineColor && css`text-decoration-color: ${p.underlineColor};`}
  ${p => p.newline && css`white-space: pre-wrap;`}  

  ${p => p.title && css`font-size: ${p.theme.fontSizeXL}; font-weight: bold`}
`
