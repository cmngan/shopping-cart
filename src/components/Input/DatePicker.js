import React from 'react'
import styled, { css } from 'styled-components'
import { generalCss, fontCss } from '../Theme'

const Select = styled.select`
  ${generalCss}
  ${fontCss}
  background-color: transparent;
  border-radius: 0;
  border: 0;
  box-sizing: border-box;
  appearance: none;
  background:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' fill='silver'><polygon points='0,0 8,0 4,4'/></svg>") no-repeat scroll 95% 60% transparent;
  background-repeat: no-repeat;

  ${p => p.underline && css`
    text-decoration: none;
    border-bottom: 1px solid ${p => p.theme.borderColor} !important;
  `}
`

// .select-css {
//   background-repeat: no-repeat, repeat;
//   background-position: right .7em top 50%, 0 0;
//   background-size: .65em auto, 100%;
// }
// .select-css::-ms-expand {
//   display: none;
// }
// .select-css:hover {
//   border-color: #888;
// }
// .select-css:focus {
//   border-color: #aaa;
//   box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
//   box-shadow: 0 0 0 3px -moz-mac-focusring;
//   color: #222; 
//   outline: none;
// }
// .select-css option {
//   font-weight:normal;
// }

export const MonthPicker = ({ value=null, onChange, ...props }) => {
  return (
    <Select id="month" name="month" selected={value} defaultValue='' {...props}>
      <option value='' disabled hidden>mm</option>
      <option value={1}>01</option>
      <option value={2}>02</option>
      <option value={3}>03</option>
      <option value={4}>04</option>
      <option value={5}>05</option>
      <option value={6}>06</option>
      <option value={7}>07</option>
      <option value={8}>08</option>
      <option value={9}>09</option>
      <option value={10}>10</option>
      <option value={11}>11</option>
      <option value={12}>12</option>
    </Select>
  )
}