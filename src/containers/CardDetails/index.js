import React, { useRef, useState } from 'react'
import { Col, Row, Text, TextInput, Button } from 'components'
import { CreditCardInput, MonthPicker } from 'components/Input'

export default ()  => {
  const [creditNumber, setCreditNumber] = useState('')
  return (
    <Col bgSecondary borderRadius='8px' AllXL width='380px'>
      <Text h1 white BottomXL>Card Details</Text>
      
      <Text secondary BottomL>Card Type</Text>
      
      <Text secondary TopXL>Name on Card</Text>
      <TextInput underline white />
      <Text secondary TopXL>Card Number</Text>
      <CreditCardInput value={creditNumber} onChange={setCreditNumber} />
      <Row>
        <Col RightXL>
          <Text secondary TopXL>Expiration date</Text>
          <MonthPicker underline white />
          {/* <TextInput underline white /> */}
        </Col>
        <Col flex={1}>
          <Text secondary TopXL>CVV</Text>
          <TextInput underline white />
        </Col>
      </Row>
      <Button primary MarginTopXL L onClick={() => alert('Check out is not ready.')}>Check Out</Button>
    </Col>
  )
}