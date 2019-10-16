import React from 'react'
import { Col, Row, Image, Text } from 'components'
import visaLogo from 'resources/visa-logo.png'
import masterLogo from 'resources/mastercard.png'

const Visa = () => {
  return (
    <Col width='240px' height='100%' bgColor='#91929A' spaceBetween VL HL borderRadius='8px' absolute absLeft='-80px' absTop='0'>
      <Image src={visaLogo} width='60px' />
      <Row spaceBetween>
        <Text XL bold white>....</Text>
        <Text XL bold white>....</Text>
        <Text XL bold white>....</Text>
        <Text XL bold white>....</Text>
      </Row>
      <Row spaceBetween>
        <Text white XS bold>Simple Credit Card</Text>
        <Text white XS>12/10</Text>
      </Row>
    </Col>
  )
}

const Mastercard = () => {
  return (
    <Col absolute absRight='0' absTop='0' absBottom='0' width='50%' center centerVertical>
      <Image src={masterLogo} width='60px' />
      <Text white S>mastercard.</Text>
    </Col>
  )
}

export default () => {
  return (
    <Row relative height='140px' MarginVM>
      <Visa />
      <Mastercard />
    </Row>
  )
}