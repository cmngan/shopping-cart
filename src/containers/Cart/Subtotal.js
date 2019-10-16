import React from 'react'
import { connect } from 'react-redux'

import { Row, Text } from 'components'

import { toPrice } from 'util/format'

const Subtotal = ({ total })  => {
  return (
    <Row bottom>
      <Text secondary S RightXS>Subtotal: </Text>
      <Text L bold>{toPrice(total)}</Text>
    </Row>
  )
}

const mapStateToProps = state => ({
  total: state.cart.items.reduce((p, c) => p + c.unit * c.price, 0),
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Subtotal)