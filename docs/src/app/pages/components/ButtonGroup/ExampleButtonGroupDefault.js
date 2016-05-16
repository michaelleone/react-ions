import React from 'react'
import ButtonGroup from 'react-conventions/lib/ButtonGroup/ButtonGroup'

const options = [
  {
    value: 'option_1',
    label: 'Option 1'
  },{
    value: 'option_2',
    label: 'Option 2'
  },{
    value: 'option_3',
    label: 'Option 3'
  }
];

const ExampleRadioDefault = () => (
  <ButtonGroup
    label="Default button group label"
    name="default-button-group"
    options={options}>
  </ButtonGroup>
)

export default ExampleRadioDefault;
