import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'

import Users from '../Users'

import * as routes from '../../constants/routes'
import history from '../../constants/history'

import GlobalStyle from './global'

function App(props) {
  return (
    <>
      <GlobalStyle />
      <Router navigator={history} location={history.location}>
        <Routes>
          <Route exact path={routes.HOME} element={<Users />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
