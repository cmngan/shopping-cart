import styled, { css } from 'styled-components'
import { generalCss, fontCss } from '../Theme'

export const TextInput = styled.input`
  ${generalCss}
  ${fontCss}
  border: 1px solid ${p => p.theme.borderColor};
  border-radius: 4px;
  box-shadow: 0;
  padding: 8px 12px;
  :focus {
    border: 1px #fff;
  }
`
