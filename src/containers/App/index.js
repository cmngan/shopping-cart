import React from 'react'
import { Row } from 'components'
import CardDetails from '../CardDetails'
import Cart from '../Cart'

export default ()  => {
  return (
    <Row AllL flexWrap center>
      <Cart />
      <CardDetails />
    </Row>
  )
}