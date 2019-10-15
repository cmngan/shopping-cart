import React from 'react'
import { connect } from 'react-redux'

import Item from './Item'
import Subtotal from './Subtotal'
import { Col, Row, Text } from 'components'

const Cart = ({ cartItemIds })  => {
  return (
    <Col flex={1} VM HM>
      <Text h1>Shopping Cart</Text>
      {cartItemIds.map((id, index) => <Item index={index} key={id} /> )}
      <Row spaceBetween TopXL>
        <Text hyperlink>← Continue Shopping</Text>
        <Subtotal />
      </Row>
    </Col>
  )
}

const mapStateToProps = (state, props) => ({
  cartItemIds: state.cart.items.map(({ id }) => id),
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Cart)