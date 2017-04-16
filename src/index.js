import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore from 'store/configureStore'
import { Root } from 'containers'

const store = configureStore()
const root = document.getElementById('app')

const renderApp = () => (
  <AppContainer>
    <Root store={store} />
  </AppContainer>
)

render(renderApp(), root)
