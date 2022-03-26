// globalStyles.js
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .ant-card-bordered .ant-card-cover {
    background: #f5f5f5;
    border: 1px solid #e8e8e8;
  }

  .ant-card-actions {
    background: #f5f5f5 !important;
    border-top: 1px solid #e8e8e8;
  }

  .ant-card-actions > li:not(:last-child) {
    border-right: 1px solid #e8e8e8;
  }
`

export default GlobalStyle
