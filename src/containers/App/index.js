import React from 'react'
import { Row, Col } from 'components'
import CardDetails from '../CardDetails'
import Cart from '../Cart'

export default ()  => {
  return (
    <Row AllL height='-webkit-fill-available'>
      <Cart />
      <CardDetails />
    </Row>
  )
}