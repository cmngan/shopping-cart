import React from 'react'
import { Col } from 'components'
import CardDetails from '../CardDetails'
import Cart from '../Cart'

export default ()  => {
  return (
    <Col>
      <Cart />
      <CardDetails />
    </Col>
  )
}