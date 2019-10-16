import React, { useState } from 'react'
import { Col, Row, Text, TextInput, Button } from 'components'
import { CreditCardInput, MonthPicker, YearPicker } from 'components/Input'
import CardSelect from './CardSelect'
export default ()  => {
  const [creditNumber, setCreditNumber] = useState('')
  return (
    <Row MarginTopL>
      <Col width='80px'  />
      <Col bgSecondary borderRadius='8px' AllXL width='380px' height='fit-content'>
        <Text h1 white BottomXL>Card Details</Text>
        <Text secondary BottomL>Card Type</Text>
        <CardSelect />
        <Text secondary TopXL>Name on Card</Text>
        <TextInput underline white />
        <Text secondary TopXL>Card Number</Text>
        <CreditCardInput value={creditNumber} onChange={setCreditNumber} />
        <Row>
          <Col RightXL>
            <Text secondary TopXL>Expiration date</Text>
            <Row flex={1}>
              <MonthPicker width='80px' underline white MarginRightM />
              <YearPicker width='80px' underline white />
            </Row>
          </Col>
          <Col flex={1}>
            <Text secondary TopXL>CVV</Text>
            <TextInput underline white type='number' width='100%' />
          </Col>
        </Row>
        <Button primary MarginTopXL L onClick={() => alert('Check out is not ready.')}>Check Out</Button>
      </Col>
    </Row>
  )
}