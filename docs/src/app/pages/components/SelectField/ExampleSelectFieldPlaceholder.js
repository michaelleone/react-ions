import React from 'react'
import SelectField from 'react-ions/src/components/SelectField/SelectField'

const options = [
  {value: '0', display: 'test 1'},
  {value: '1', display: 'test 2'}
]

const ExampleSelectFieldPlaceholder = () => (
  <SelectField
    options={options}
    placeholder='Please select...'
    valueProp='value'
    displayProp='display' />
)

export default ExampleSelectFieldPlaceholder
