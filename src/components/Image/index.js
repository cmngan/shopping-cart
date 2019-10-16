import styled, { css } from 'styled-components'
import { generalCss } from '../Theme'

export const Image = styled.img`
  ${generalCss}
  ${p => p.XS && css`width: ${p.theme.imageSizeXS}; height: ${p.theme.imageSizeXS}`}
  ${p => p.S && css`width: ${p.theme.imageSizeS}; height: ${p.theme.imageSizeS}`}
  ${p => p.M && css`width: ${p.theme.imageSizeM}; height: ${p.theme.imageSizeM}`}
  ${p => p.L && css`width: ${p.theme.imageSizeL}; height: ${p.theme.imageSizeL}`}
  ${p => p.XL && css`width: ${p.theme.imageSizeXL}; height: ${p.theme.imageSizeXL}`}
`
