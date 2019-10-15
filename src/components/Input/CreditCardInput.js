import React, { useRef } from 'react'
import { Col, Row, TextInput } from 'components'

const CreditCardInput = ({ inputRef, fullWidth, show = false, ...props }) => 
  <TextInput ref={inputRef} type='number' pattern='[0-9]*' hide={!show} size={4} width={fullWidth ?  '100%' :'40px'} underline white {...props} />

export default ({ value, onChange }) => {
  const 
    creditRef = [useRef(null), useRef(null), useRef(null), useRef(null)]
  function onClickCreditCard(index, event) {
    if(index < 3 && event.target.value.length >= 4) 
      creditRef[index+1].current.focus()
    if(index && event.target.value.length === 0)
      creditRef[index-1].current.focus()
    onChange(value.slice(0, index*4) + event.target.value + value.slice((index+1)*4+1, (index+2)*4))
  }
  function onFocusCreditCard(index, event) {
    if(value.length < index * 4) creditRef[~~(value.length/4)].current.focus()
  }
  return (
    <Row>
      <CreditCardInput inputRef={creditRef[0]} onFocus={e => onFocusCreditCard(0, e) } value={value.slice(0, 4)} onChange={e => onClickCreditCard(0, e)} />
      <CreditCardInput inputRef={creditRef[1]} onFocus={e => onFocusCreditCard(1, e)} value={value.slice(4, 8)} onChange={e => onClickCreditCard(1, e)} /> 
      <CreditCardInput inputRef={creditRef[2]} onFocus={e => onFocusCreditCard(2, e)} value={value.slice(8, 12)} onChange={e => onClickCreditCard(2, e)} />
      <Col flex={1}>
        <CreditCardInput inputRef={creditRef[3]} onFocus={e => onFocusCreditCard(3, e)} fullWidth value={value.slice(12, 16)} onChange={e => onClickCreditCard(3, e)} />
      </Col>
    </Row>
  )
}