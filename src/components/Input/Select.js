import React from 'react'
import styled, { css } from 'styled-components'
import { generalCss, fontCss } from '../Theme'

const StyledSelect = styled.select`
  ${generalCss}
  ${fontCss}
  background-color: transparent;
  border-radius: 0;
  border: 0;
  box-sizing: border-box;
  appearance: none;
  background:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' fill='silver'><polygon points='0,0 8,0 4,4'/></svg>") no-repeat scroll 95% 60% transparent;
  background-repeat: no-repeat;
  padding-right: 20px;
  ${p => p.underline && css`
    padding-top: 12px;
    padding-bottom: 12px;
    text-decoration: none;
    border-bottom: 1px solid ${p => p.theme.borderColor} !important;
  `}
`

// options: [ { label: '01', value: 1 }, { label: '02', value: 2 }, ... ]
export const Select = ({ value, onChange, options, placeholder, ...props }) => {
  return (
    <StyledSelect selected={value} onChange={onChange} defaultValue='' {...props}>
      { placeholder && <option value='' disabled hidden>{placeholder}</option> }
      { options.map( ({ label, value }) => 
        <option key={label} value={value}>{label}</option>
      )}
    </StyledSelect>
  )
}