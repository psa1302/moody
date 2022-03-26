import React from 'react'
import { Spin } from 'antd'

import { LoaderContainer } from './styles'

function Loader() {
  return (
    <LoaderContainer className="loader">
      <Spin tip="Loading..." />
    </LoaderContainer>
  )
}

export default Loader
