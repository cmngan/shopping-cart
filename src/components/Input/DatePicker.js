import React from 'react'
import { Select } from './index'

const monthOptions = [
  { value: 1, label: '01'}, 
  { value: 2, label: '02'}, 
  { value: 3, label: '03'}, 
  { value: 4, label: '04'}, 
  { value: 5, label: '05'}, 
  { value: 6, label: '06'}, 
  { value: 7, label: '07'}, 
  { value: 8, label: '08'}, 
  { value: 9, label: '09'}, 
  { value: 10, label: '10'}, 
  { value: 11, label: '11'}, 
  { value: 12, label: '12'}, 
]

const yearOptions = new Array(50).fill(null).map((_, index) => {
  const value = new Date().getFullYear() + index
  return { value, label: value }
}) 

export const MonthPicker = ({ ...props }) => 
  <Select options={monthOptions} placeholder='mm' {...props} />

export const YearPicker = ({ ...props }) => 
  <Select options={yearOptions} placeholder='yyyy' {...props} />