import React from 'react'
import { connect } from 'react-redux'
import { changeItemUnit, removeItem } from 'actions/cart'

import { Col, Row, Text, Hr, Image, TextInput, Button } from 'components'
import { toPrice } from 'util/format'

const Item = ({ 
  item: { id, name, image, unit, price },
  changeItemUnit, removeItem
})  => {
  return (
    <Col>
      <Row VXL centerVertical>
        <Image L RightXL src={image} alt={`Image of ${name}`} />
        <Col flex={2}>
          <Text L bold BottomXS>{name}</Text>
          <Text secondary S>{'#' + id}</Text>
        </Col>
        <Row centerVertical flex={1} HS>
          <Button onClick={() => changeItemUnit(id, unit-1)} disabled={!unit}>−</Button>
          <TextInput MarginHS size={3} value={unit} center disabled />
          <Button onClick={() => changeItemUnit(id, unit+1)} disabled={unit >= 99}>+</Button>
        </Row>
        <Col flex={1} HS>
          <Text>{toPrice(price)}</Text>
        </Col>
        <Button onClick={() => removeItem(id)}>✕</Button>
      </Row>
      <Hr />
    </Col>
  )
}

const mapStateToProps = (state, props) => ({
  item: state.cart.items[props.index],
})

const mapDispatchToProps = {
  changeItemUnit, removeItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)