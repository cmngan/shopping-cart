import { css } from 'styled-components'

export const fontCss = css`
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

  ${p => p.center && css`text-align: center`}
`

export const generalCss = css`
  ${p => css`
    ${p.relative && `position: relative;`}
    ${p.absolute && `position: absolute;`}
    ${p.absTop && `top: ${p.absTop};`}
    ${p.absBottom && `bottom: ${p.absBottom};`}
    ${p.absLeft && `left: ${p.absLeft};`}
    ${p.absRight && `right: ${p.absRight};`}
    ${p.width && `width: ${p.width};`}
    ${p.height && `height: ${p.height};`}
    ${p.borderRadius && `border-radius: ${p.borderRadius}`}
    ${p.opacity && `opacity: ${p.opacity}`}
    ${colorCss}
    ${cursorCss}
    ${spacingCss}
  `}
`

export const colorCss = css`
  ${p => css`
    ${p.primary && `color: ${p.theme.colorPrimary}`}
    ${p.secondary && `color: ${p.theme.colorSecondary}`}
    ${p.white && `color: ${p.theme.white}`}
    ${p.black && `color: ${p.theme.black}`}
    ${p.error && `color: ${p.theme.errorColor}`}
    ${p.button && `color: ${p.theme.buttonColor}`}
    ${p.disabled && css`color: ${p.theme.disabledColor}`}
    ${p.color && `color: ${p.color}`}

    ${p.bgPrimary && `background-color: ${p.theme.bgColorPrimary}`}
    ${p.bgSecondary && `background-color: ${p.theme.bgColorSecondary}`}
    ${p.bgWhite && `background-color: ${p.theme.white}`}
    ${p.bgBlack && `background-color: ${p.theme.black}`}
    ${p.bgColor && `background-color: ${p.bgColor}`}  
  `}
`

export const cursorCss = css`
  ${p => p.noSelect && 'user-select: none;'}
  ${p => p.onClick && 'cursor: pointer;'}
  ${p => p.disabled && 'cursor: not-allowed;'}
`

export const spacingCss = css`
  ${p => 
    [
      { key: 'XXS', value: 'XXS', cssKey: 'padding' },
      { key: 'XS', value: 'XS', cssKey: 'padding' },
      { key: 'S', value: 'S', cssKey: 'padding' },
      { key: 'M', value: 'M', cssKey: 'padding' },
      { key: 'L', value: 'L', cssKey: 'padding' },
      { key: 'XL', value: 'XL', cssKey: 'padding' },

      { key: 'XXS', value: 'XXS', cssKey: 'margin', prefix: 'Margin' },
      { key: 'XS', value: 'XS', cssKey: 'margin', prefix: 'Margin' },
      { key: 'S', value: 'S', cssKey: 'margin', prefix: 'Margin' },
      { key: 'M', value: 'M', cssKey: 'margin', prefix: 'Margin' },
      { key: 'L', value: 'L', cssKey: 'margin', prefix: 'Margin' },
      { key: 'XL', value: 'XL', cssKey: 'margin', prefix: 'Margin' },
    ].map( ({ key, value, cssKey, prefix = '' }) => css`
      ${p[prefix + 'All' + key] && `${cssKey}: ${p.theme['spacing' + value]};`}
      ${p[prefix + 'V' + key] && `${cssKey}-top: ${p.theme['spacing' + value]}; ${cssKey}-bottom: ${p.theme['spacing' + value]};`}
      ${p[prefix + 'H' + key] && `${cssKey}-left: ${p.theme['spacing' + value]}; ${cssKey}-right: ${p.theme['spacing' + value]};`}
      ${p[prefix + 'Left' + key] && `${cssKey}-left: ${p.theme['spacing' + value]};`}
      ${p[prefix + 'Right' + key] && `${cssKey}-right: ${p.theme['spacing' + value]};`}
      ${p[prefix + 'Bottom' + key] && `${cssKey}-bottom: ${p.theme['spacing' + value]};`}
      ${p[prefix + 'Top' + key] && `${cssKey}-top: ${p.theme['spacing' + value]};`}    
    `)
  }
`