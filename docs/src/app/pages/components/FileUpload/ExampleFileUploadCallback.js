import React from 'react'
import FileUpload from 'react-ions/src/components/FileUpload'

const callback = (event) => {
  console.log(event)
}

const ExampleFileUploadCallback = () => (
  <FileUpload showPreview={true} changeCallback={callback} />
)

export default ExampleFileUploadCallback
