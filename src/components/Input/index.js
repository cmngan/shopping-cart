import styled, { css } from 'styled-components'
import { generalCss, fontCss } from '../Theme'

export const TextInput = styled.input`
  ${generalCss}
  ${fontCss}
  padding: 8px 12px;
  background-color: transparent;
  border: 0;
  ${p => p.underline && css`
    padding: 12px 0;
    text-decoration: none;
    border-bottom: 1px solid ${p => p.theme.borderColor} !important;
  `}
  ${p => p.bordered && css`
    border: 1px solid ${p => p.theme.borderColor};
    border-radius: 4px;
  `}
  box-shadow: 0;
  :focus {
    border: 0px;
    box-shadow: 0;
    outline: none !important;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type=number] {
    -moz-appearance: textfield;
  }
  ${p => p.hide && css`
    -webkit-text-security: disc;
    -moz-text-security:circle;
    text-security:circle;
  `}
`

export { default as CreditCardInput } from './CreditCardInput'
export * from './DatePicker'
export * from './Select'